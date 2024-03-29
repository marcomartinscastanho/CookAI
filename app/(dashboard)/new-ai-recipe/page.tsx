import NewAiRecipe from "@/components/NewAiRecipe";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React from "react";

const NewAiRecipePage = () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewAiRecipe />
    </HydrationBoundary>
  );
};

export default NewAiRecipePage;
