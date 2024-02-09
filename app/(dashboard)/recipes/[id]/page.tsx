import RecipeInfo from "@/components/RecipeInfo";
import { getRecipe } from "@/utils/actions";
import { redirect } from "next/navigation";
import React, { FC } from "react";

interface Props {
  params: {
    id: string;
  };
}

const RecipePage: FC<Props> = async ({ params }) => {
  const recipe = await getRecipe(params.id);
  if (!recipe) {
    redirect("/recipes");
  }

  return <RecipeInfo recipe={recipe} />;
};

export default RecipePage;
