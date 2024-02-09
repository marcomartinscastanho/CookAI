"use client";
import React, { FormEvent } from "react";
import RecipeInfo from "./RecipeInfo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { findRecipe, generateAiRecipe, saveRecipe } from "@/utils/actions";
import toast from "react-hot-toast";

const NewAiRecipe = () => {
  const queryClient = useQueryClient();

  const {
    mutate: askForRecipe,
    isPending,
    data: recipe,
  } = useMutation({
    mutationFn: async (prompt: string) => {
      const existingRecipe = await findRecipe(prompt);
      if (existingRecipe) return existingRecipe;
      const newAiRecipe = await generateAiRecipe(prompt);
      if (!newAiRecipe) {
        toast.error("Sorry, I could not find that recipe 😞");
        return null;
      }
      await saveRecipe(newAiRecipe);
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      return newAiRecipe;
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const prompt = Object.fromEntries(formData.entries())["recipe"];
    askForRecipe(String(prompt));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <h2 className="text-2xl mb-4 font-semibold text-primary">
          Find new creative recipes
        </h2>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="Describe the recipe..."
            name="recipe"
            required
            disabled={isPending}
          />
          <button
            className="btn btn-primary join-item uppercase"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "generating..." : "generate recipe"}
          </button>
        </div>
      </form>
      <div className="mt-16">
        {recipe ? <RecipeInfo recipe={recipe} /> : null}
      </div>
    </>
  );
};

export default NewAiRecipe;
