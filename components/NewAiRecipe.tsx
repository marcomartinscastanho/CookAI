"use client";
import React, { FormEvent } from "react";
import RecipeInfo from "./RecipeInfo";
import { useMutation } from "@tanstack/react-query";
import { generateAiRecipe } from "@/utils/actions";
import toast from "react-hot-toast";

const NewAiRecipe = () => {
  const {
    mutate: askForRecipe,
    isPending,
    data: recipe,
  } = useMutation({
    mutationFn: async (prompt: string) => {
      const newAirecipe = await generateAiRecipe(prompt);
      if (!newAirecipe) {
        toast.error("Sorry, I could not find that recipe 😞");
        return null;
      }
      return newAirecipe;
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const prompt = Object.fromEntries(formData.entries())["recipe"];
    askForRecipe(String(prompt));
  };

  if (isPending) {
    return <span className="loading loading-lg"></span>;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <h2 className="mb-4">Find new creative recipes</h2>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="Describe the recipe..."
            name="recipe"
            required
          />
          <button className="btn btn-primary join-item uppercase" type="submit">
            generate recipe
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
