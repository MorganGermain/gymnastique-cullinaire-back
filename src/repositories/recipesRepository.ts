import { query } from "../services/dbService"
import { RawRecipe } from "src/types/Recipe"

const baseQuery = `
  SELECT
    recipe.id recipe_id,
    recipe.name recipe_name,
    recipe.description description,
    ingredient.id ingredient_id,
    recipe_has_ingredient.unit ingredient_unit,
    ingredient.name ingredient_name,
    recipe_has_ingredient.quantity ingredient_quantity,
    recipe.duration recipe_duration,
    step.id step_id,
    step.step_order step_order,
    step.description step_description
  FROM recipe
    LEFT JOIN recipe_has_ingredient ON recipe_has_ingredient.id_recipe = recipe.id
    LEFT JOIN ingredient ON ingredient.id = recipe_has_ingredient.id_ingredient
    LEFT JOIN step ON step.id_recipe = recipe.id
 `

export const getAllRecipes = () => {
  return query<RawRecipe[]>(baseQuery)
}

export const getRecipesByIds = (ids: string[]) => {
  const sqlQuery = `${baseQuery}
    WHERE recipe.id IN ('${ids.join(`', '`)}')
  `;
  return query<RawRecipe[]>(sqlQuery)
}

