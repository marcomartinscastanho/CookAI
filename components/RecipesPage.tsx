"use client";
import { getAllRecipes } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import RecipesList from "./RecipesList";
import { Recipe } from "@prisma/client";

const Recipes = () => {
  const { data, isPending } = useQuery<Recipe[]>({
    queryKey: ["recipes"],
    queryFn: () => getAllRecipes(),
  });

  if (isPending) {
    return <span className="loading"></span>;
  }
  if (!data) {
    return <h4 className="text-lg">Something went wrong...</h4>;
  }

  return (
    <>
      <h1 className="text-4xl font-semibold mb-8 text-primary">Your Recipes</h1>
      <RecipesList recipes={data} />
    </>
  );
};

export default Recipes;
