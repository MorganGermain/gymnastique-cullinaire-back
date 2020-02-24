import {getAllRecipes, getRecipesByIds} from '../repositories/recipesRepository'
import { RawRecipe, Recipe, Ingredient, Step } from '../types/Recipe'
import { groupBy, values, map, pipe, head, path as get } from 'ramda'
import { generatePdfFromRecipes } from './pdfService'


export const getRecipes = () => {
  return getAllRecipes()
    .then(rawRecipesToRecipes)
}

export const generatePdf = (ids: string[]) => {
  return getRecipesByIds(ids)
    .then(
      pipe(rawRecipesToRecipes, generatePdfFromRecipes)
    )
}

const rawRecipesToRecipes = pipe(
  groupBy<RawRecipe>(rawRecipe => rawRecipe.recipe_id),
  values,
  map<RawRecipe[], Recipe>(rawRecipes => {
    const id = rawRecipes[0].recipe_id
    const name = rawRecipes[0].recipe_name
    const cooking_time = rawRecipes[0].recipe_cooking_time
    const preparation_time = rawRecipes[0].recipe_preparation_time
    const nb_people = rawRecipes[0].recipe_nb_people
    const description = rawRecipes[0].recipe_description
    const creation_date = rawRecipes[0].recipe_creation_date
    const steps = uniqBy(['id'], rawRecipes.map<Step>(rawRecipe => ({
      id: rawRecipe.step_id,
      description: rawRecipe.step_description,
      order: rawRecipe.step_order
    })))
    const ingredients = uniqBy(['id'], rawRecipes.map<Ingredient>(rawRecipe => ({
      id: rawRecipe.ingredient_id,
      name: rawRecipe.ingredient_name,
      quantity: rawRecipe.ingredient_quantity,
      unit: rawRecipe.ingredient_unit
    })))

    return { id, name, cooking_time, preparation_time, nb_people, creation_date, steps, ingredients, description }
  })
)

const uniqBy = <T>(path: string[], list: T[]) => {
  const ids = Array.from(new Set(list.map(elem => get(path, elem))))
  return ids.map(id => list.find(elem => get(path, elem) === id))
}