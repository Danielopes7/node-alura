import express from "express";
import LivroController from "../controllers/LivrosController.js";

const router = express.Router()


router
    .get("/livros", LivroController.ListarLivros)  


export default router