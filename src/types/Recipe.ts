export interface Recipe {
  id: string
  name: string
  description: string
  steps: Step[]
  ingredients: Ingredient[]
  cooking_time: number
  preparation_time: number
  creation_date: string
  nb_people: number,
}

export interface Ingredient {
  id: string
  name: string
  quantity: string
  unit: string
}

export interface RawRecipe {
  recipe_id: string
  recipe_description: string
  recipe_name: string
  recipe_cooking_time: number
  recipe_preparation_time: number
  recipe_nb_people: number
  ingredient_id: string
  ingredient_name: string
  ingredient_quantity: string
  recipe_creation_date: string
  step_id: string
  step_order: number
  step_description: string
  ingredient_unit: string
}

export interface Step {
  id: string
  order: number
  description: string
}