import { Request, Response } from 'express'
import * as recipesService from '../services/recipesService'

export const getRecipes = async (req: Request, res: Response) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  try {
    const recipes = await recipesService.getRecipes()
    res.send(recipes)
  } catch (err) {
    res.send(err)
  }
}

export const generatePdf = async (req: Request, res: Response) => {
  const ids = req.body.ids
  console.log(req.body)
  if (ids) {
    try {
      const pdf = await recipesService.generatePdf(ids)
      console.log(pdf)
      res.send(pdf)
    } catch (err) {
      res.send(err)
    }
  } else {
    res.send("Bad request, you must provide ids")
  }
}