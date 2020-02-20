export interface Recipe {
  id: string
  name: string
  description: string
  steps: Step[]
  ingredients: Ingredient[]
  duration: string
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
  ingredient_id: string
  ingredient_name: string
  ingredient_quantity: string
  recipe_duration: string
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