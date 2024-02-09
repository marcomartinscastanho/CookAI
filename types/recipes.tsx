type Ingredient = {
  name: string;
  quantity: string;
  spec: string;
};

export type Recipe = {
  title: string;
  description: string;
  portions: number;
  prepTime: number;
  cookTime: number;
  ingredients: Ingredient[];
  steps: string[];
};

export type AiRecipesResponse = {
  recipe: Recipe;
};
