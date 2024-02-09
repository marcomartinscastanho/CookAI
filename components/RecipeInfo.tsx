import { Ingredient } from "@/types/recipes";
import { saveRecipe } from "@/utils/actions";
import { Recipe } from "@prisma/client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { FC } from "react";
import toast from "react-hot-toast";
import { PiUsers, PiCookingPot, PiKnife } from "react-icons/pi";

interface Props {
  recipe: Recipe;
}

const RecipeInfo: FC<Props> = ({ recipe }) => {
  const {
    title,
    portions,
    prepTime,
    cookTime,
    description,
    ingredients,
    steps,
  } = recipe;

  return (
    <div className="flex flex-col max-w-4xl items-center">
      <h1 className="text-6xl font-semibold mb-8 text-center">{title}</h1>
      <div className="flex justify-evenly pb-2 border-b border-base-content mb-6 w-full">
        <div className="flex gap-3">
          <PiUsers className="h-6 w-6" />
          {portions} portions
        </div>
        <div
          className="flex gap-3"
          aria-label="preparation time"
          title="preparation time"
        >
          <PiKnife className="h-6 w-6" />
          {prepTime} min
        </div>
        <div
          className="flex gap-3"
          aria-label="cooking time"
          title="cooking time"
        >
          <PiCookingPot className="h-6 w-6" />
          {cookTime} min
        </div>
      </div>
      <p className="px-8 font-light text-center mb-12">{description}</p>
      <div className="grid sm:grid-cols-1 lg:grid-cols-[4fr,3fr] gap-8 mb-10">
        <div>
          <h2 className="text-2xl text-center mb-4">Ingredients</h2>
          <table className="table-auto border-separate border-spacing-y-2 w-full">
            <tbody>
              {(ingredients as Ingredient[]).map((ingredient) => (
                <tr key={ingredient.name} className="bg-base-100">
                  <td className="p-2 pl-4 rounded-l-xl">
                    {ingredient.quantity}
                  </td>
                  <td className="p-2 font-semibold">{ingredient.name}</td>
                  <td className="p-2 pr-4 rounded-r-xl">{ingredient.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-2xl text-center mb-4">Preparation Steps</h2>
          {(steps as string[]).map((step, index) => (
            <p key={index} className="mb-2 bg-base-100 py-2 px-4 rounded-xl">
              {step}
            </p>
          ))}
        </div>
      </div>
      <Link href="/recipes" className="btn btn-secondary">
        BACK TO THE LIST
      </Link>
    </div>
  );
};

export default RecipeInfo;
