const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://yicelagutierrezguillen:Contraseña01*@cluster0.2wh0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoURI, {})
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

app.get("/", (req, res) => {
  res.send({ hola: "¡Hola, mundo!" });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
