const { Router } = require("express");
const { Recipe, TypeDiet } = require("../db");
const router = Router();

router.post("/", async (req, res, next) => {
  let {
    img,
    title,
    summary,
    healthScore,
    analyzedInstructions,
    // createdInDb,
    typeDiets,
  } = req.body;
  if (!title || !summary) {
    // Si no ingresan Title o Summary entra en el if y envia el error.
    return res
      .status(400)
      .send("Please, insert a title and a summary to continue!");
  }
  console.log(title);
  try {
    let createRecipe = await Recipe.create({
      img,
      title,
      summary,
      healthScore,
      analyzedInstructions,
      // createdInDb,
    });
    let dietTypeDb = await TypeDiet.findAll({ where: { name: typeDiets } });
    createRecipe.addTypeDiet(dietTypeDb);
    res.status(200).send("Recipe created successfully");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
