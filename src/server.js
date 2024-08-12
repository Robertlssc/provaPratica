import "dotenv/config";
import express from "express";

const PORT = process.env.PORT;

//importar conexão
import conn from "./config/conn.js";

//Importar dos módulos (TABELA)
import "./models/palestranteModel.js";

//importar as rotas
import palestranteRouter from "./routes/palestranteRoute.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Utilizar a rota
app.use("/eventos", palestranteRouter);

app.use((request, response) => {
  response.status(404).json({ message: "Recurso não encontrado " });
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta: " + PORT);
});
