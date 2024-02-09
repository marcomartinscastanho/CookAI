import { Recipe } from "@prisma/client";

export type Ingredient = {
  name: string;
  quantity: string;
  spec: string;
};

export type AiRecipesResponse = {
  recipe: Recipe;
};
