const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define("recipe", {
    id: {
      type: DataTypes.UUID, //Uso UUID para que no se repita con el ID de la API.
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    img: {
      type: DataTypes.TEXT,
    },

    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    healthScore: {
      type: DataTypes.STRING,
    },
    analyzedInstructions: {
      type: DataTypes.TEXT,
    },
    createdInDb: {
      //solo las comidas que esten en la BD tendrán esta propiedad.
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
