const axios = require("axios");
const { Recipe, TypeDiet } = require("../db");
const { Sequelize } = require("sequelize");
// const API_KEY = "8f6ea41f4e274f64b318bcae3e2a1463";
// const API_KEY = "045e46cb1172404ab6a54a07e5dc3229";
const { API_KEY } = process.env;

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
  );
  //console.log(apiUrl);
  const apiInfo = await apiUrl.data.results.map((e) => {
    return {
      id: e.id,
      title: e.title,
      img: e.image,
      typeDiets: e.diets.map((d) => {
        return { name: d };
      }), // Traigo un array con los tipos de dieta de la receta.
      dishTypes: e.dishTypes.map((d) => {
        return { name: d };
      }), // Lo mismo pero con el Tipo de Plato.
      summary: e.summary, // Trae el resumen del plato.
      healthScore: e.healthScore, // Puntuación de que tan saludable es la receta.
      analyzedInstructions: e.analyzedInstructions, // Trae el paso a paso de como realizar la receta.
    };
  });
  //   console.log(apiInfo)
  return apiInfo;
};

const getDBInfo = async () => {
  return await Recipe.findAll({
    include: {
      model: TypeDiet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllRecipes = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDBInfo();
  const allRecipes = [...apiInfo, ...dbInfo];
  console.log(allRecipes);
  return allRecipes;
};

async function getAllRecipesOk(req, res) {
  const { name } = req.query; // Pido el nombre por query
  if (!name) {
    // Si no llega ningun nombre entra en el if:
    try {
      const recipeApiInfo = await getApiInfo(); // Traigo todas las recetas que tengo en la api.
      const recipeBD = await Recipe.findAll({
        // Traigo todas las recetas que tengo en la BD.
        include: {
          model: TypeDiet, // Le pido que incluya el modelo Typediet
          attributes: ["name"], // Con la propiedad name.
          through: {
            attributes: [],
          },
        },
      });
      return res.send(await Promise.all([...recipeApiInfo, ...recipeBD])); // Una vez que terminan las promesas, concateno todas la recetas.
    } catch (err) {
      res.json({ err });
      console.error(err);
    }
  } else {
    // Si llega un nombre por params, va a entrar en el else.
    const query = name.toLowerCase(); //  Paso todo a minuscula , para evitar problemas a filtrar.
    try {
      const recipeApiInfo = await getApiInfo();
      const recipeApi = recipeApiInfo.filter((r) => {
        if (r.title.toLowerCase().includes(query)) {
          // si el titulo de la receta que traigo desde la api , incluye el Nombre que me pasaron por params
          return r; // Lo retorno dentro del array del filter.
        }
      });

      const recipeBD = await Recipe.findAll({
        // Hago lo mismo, pero ahora desde la BD.
        where: {
          title: { [Sequelize.Op.like]: `%${query}%` }, // op(funcion de sql) --> va a filtrar si encuentra algun titulo parecido al nombre que me pasan por query
        }, // %${query}% --> el % va en los dos lados para decir que lo contenga
        include: {
          model: TypeDiet,
          attributes: ["name"], //Le digo que la respuesta incluya el tipo de dieta.
          through: {
            attributes: [],
          },
        },
      });

      const respuesta = await Promise.all(recipeBD.concat(recipeApi)); //  Una vez que terminan las promesas, concateno ambas informaciones.
      console.log(respuesta.length);
      if (respuesta.length === 0) res.send(await getAllRecipes()); // Si no matcheo ninguna de las dos, significa que no existe el nombre que me pasaron por query.
      return res.send(respuesta); // Retorno todas las recetas.
    } catch (err) {
      res.json({ err });
      console.error(err);
    }
  }
}

//
module.exports = {
  getAllRecipes,
  getDBInfo,
  getApiInfo,
  getAllRecipesOk,
};
