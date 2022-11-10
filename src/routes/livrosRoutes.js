import express from "express";
import LivroController from "../controllers/LivrosController.js";

const router = express.Router()


router
    .get("/livros", LivroController.ListarLivros)  
    .get("/livros/:id", LivroController.listarLivrosPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)

export default router