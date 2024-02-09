"use client";
import { getAllRecipes } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import React, { ChangeEvent, useState } from "react";
import RecipesList from "./RecipesList";
import { Recipe } from "@prisma/client";

const Recipes = () => {
  const [search, setSearch] = useState("");
  const { data, isPending } = useQuery<Recipe[]>({
    queryKey: ["recipes", search],
    queryFn: () => getAllRecipes(search),
  });

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  if (!isPending && !data) {
    return <h4 className="text-lg">Something went wrong...</h4>;
  }

  return (
    <>
      <h1 className="text-4xl font-semibold mb-8 text-primary">Your Recipes</h1>
      <form className="max-w-lg mb-8">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Search in your recipes..."
            className="input input-bordered join-item w-full"
            name="search"
            value={search}
            onChange={handleChangeSearch}
          />
          <button
            className="btn btn-secondary join-item"
            type="button"
            disabled={isPending}
            onClick={() => setSearch("")}
          >
            {isPending ? "SEARCHING..." : "CLEAR"}
          </button>
        </div>
      </form>
      {isPending ? (
        <span className="loading"></span>
      ) : (
        <RecipesList recipes={data} />
      )}
    </>
  );
};

export default Recipes;
