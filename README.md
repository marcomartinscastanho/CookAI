# CookAI

A manager of cooking recipes that allows to generate recipes using AI.

The web application is live [here](https://cook-ai-self.vercel.app/) but since it's using Vercel's free tier which limits serverless functions to 10 seconds, large calls to OpenAI API time out.

## Libraries

- react-query
- openai
- react-hot-toast
- react-icons
- daisyui
- prisma
- tailwindcss

## External services

- [Clerk](clerk.com) - user authentication
- [PlanetScale](planetscale.com) - hosting Prisma DB

## Planned Features

- Light/dark theme
- Ability to regenerate recipe with slightly increased chat temperature
- Ability to add optional input prompts like “portions”, “include ingredients”, ”exclude ingredients“, etc.
- Fetch recipe image and save it along with the recipe
- Ability to edit a recipe
- Ability to manually add recipes
- Save recipe to PDF
- Support for Portuguese language
