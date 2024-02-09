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
      <div className="card-body grid gird-col-[1fr,auto,auto]">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="flex flex-row justify-evenly pt-2 border-t border-base-200 w-full mt-2">
          <div className="flex gap-2">
            <PiUsers className="h-4 w-4" />
            {portions}
          </div>
          <div className="flex gap-2">
            <PiKnife className="h-4 w-4" />
            {prepTime}
          </div>
          <div className="flex gap-2">
            <PiCookingPot className="h-4 w-4" />
            {cookTime}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
