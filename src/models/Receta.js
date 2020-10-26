const { Schema, model } = require("mongoose");

const RecetaSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    nacionalidad: {
      type: String,
      required: true
    },
    ingredientes: {
      type: String,
      required: true
    },
    preparacion: {
      type: String,
      required: true
    },
    tiempo: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);



module.exports = model("Receta", RecetaSchema);