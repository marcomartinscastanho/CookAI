import { Recipe } from "@prisma/client";
import React, { FC } from "react";
import RecipeCard from "./RecipeCard";

interface Props {
  recipes: Recipe[];
}

const RecipesList: FC<Props> = ({ recipes }) => {
  if (recipes.length === 0) {
    return <h4 className="text-lg ">No recipes found...</h4>;
  }

  return (
    <div className="grid sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-8">
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};

export default RecipesList;
