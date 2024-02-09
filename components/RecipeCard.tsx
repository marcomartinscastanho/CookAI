import { Recipe } from "@prisma/client";
import Link from "next/link";
import React, { FC } from "react";
import { PiCookingPot, PiKnife, PiUsers } from "react-icons/pi";

interface Props {
  recipe: Recipe;
}

const RecipeCard: FC<Props> = ({ recipe }) => {
  const { id, title, description, portions, prepTime, cookTime } = recipe;
  return (
    <Link
      href={`/recipes/${id}`}
      className="card card-compact rounded-xl shadow-xl bg-base-100"
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="flex flex-row justify-evenly pt-2 border-t border-base-300 w-full mt-2">
          <div className="flex gap-2">
            <PiUsers className="h-5 w-5" />
            {portions}
          </div>
          <div className="flex gap-2">
            <PiKnife className="h-5 w-5" />
            {prepTime} min
          </div>
          <div className="flex gap-2">
            <PiCookingPot className="h-5 w-5" />
            {cookTime} min
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
