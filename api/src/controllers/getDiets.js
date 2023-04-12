let diets = [
  { name: "gluten free" },
  { name: "ketogenic" },
  { name: "vegetarian" },
  { name: "lacto-vegetarian" },
  { name: "lacto ovo vegetarian" },
  { name: "vegan" },
  { name: "pescatarian" },
  { name: "paleolithic" },
  { name: "primal" },
  { name: "whole 30" },
];
module.exports = {
  diets,
};

// const { TypeDiet } = require("../db");

// const getDiets = async (req, res) => {
//   try {
//     const diets = await TypeDiet.findAll();
//     diets.length ? res.send(diets) : res.send("Diet not found");
//   } catch (err) {
//     res.status(400).send({ err });
//   }
// };
//getDiets
// - Obtener todos los tipos de dieta posibles
//   - En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular [acá](https://spoonacular.com/food-api/docs#Diets)
// module.exports = {
//   getDiets,
// };
