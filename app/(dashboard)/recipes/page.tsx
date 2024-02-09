import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllRecipes } from "@/utils/actions";
import Recipes from "@/components/RecipesPage";

const RecipesPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["recipes"],
    queryFn: () => getAllRecipes(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Recipes />
    </HydrationBoundary>
  );
};

export default RecipesPage;
