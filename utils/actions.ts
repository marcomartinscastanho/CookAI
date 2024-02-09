"use server";
import { AiRecipesResponse } from "@/types/recipes";
import OpenAI from "openai";
import prisma from "./db";
import { Recipe } from "@prisma/client";
import { currentUser } from "@clerk/nextjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateAiRecipe = async (prompt: string) => {
  const query = `Find the recipe for ${prompt} .
If the recipe exists, create a list of the ingredients needed for cooking 4 portions of the recipe. For each ingredient, get the quantity (in metric units if applicable), the name of the ingredient, and any specification about the ingredient (if applicable).
Create also the list of steps to prepare the recipe. Response should be in the following JSON format: 
{
  "recipe": {
    "title": "title of the recipe",
    "description": "a paragraph describing the end result",
    "portions": "a number, the number of portions it serves",
    "prepTime": "a number, the time the recipe takes to prepare, in minutes",
    "cookTime": "a number, the time the recipe takes to cook, in minutes",
    "ingredients": [{"name": "name of ingredient 1", "quantity": "the quantity needed of ingredient 1", "spec": "specification of ingredient 1"}, {"name": "name of ingredient 2", "quantity": "the quantity needed of ingredient 2", "spec": "specification of ingredient 2"}]
    "steps": ["short paragraph on the preparation step 2", "short paragraph on the preparation step 2","short paragraph on the preparation step 3"]
  }
}
If you can't find info on the recipe return { "recipe": null }, with no additional characters.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "you are a kitchen chef" },
        { role: "user", content: query },
      ],
      temperature: 0,
    });

    const responseContent = response.choices[0].message.content;
    if (!responseContent) {
      throw new Error("could not parse response");
    }
    const recipeData: AiRecipesResponse = JSON.parse(responseContent);
    if (!recipeData.recipe) {
      return null;
    }
    return recipeData.recipe;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const findRecipe = async (prompt: string) => {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  return prisma.recipe.findFirst({
    where: { title: { contains: prompt }, owner: user.id },
  });
};

export const saveRecipe = async (recipe: Recipe) => {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  return prisma.recipe.create({
    data: {
      ...recipe,
      ingredients: recipe.ingredients || [],
      steps: recipe.steps || [],
      owner: user.id,
    },
  });
};

export const getAllRecipes = async (search?: string) => {
  if (!search) {
    return prisma.recipe.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  return prisma.recipe.findMany({
    where: {
      title: { contains: search },
    },
    orderBy: { createdAt: "desc" },
  });
};

export const getRecipe = async (id: string) => {
  return prisma.recipe.findUnique({
    where: { id },
  });
};
