import livros from "../models/Livro.js"

class LivroController {

    static ListarLivros = (req, res) =>{
        livros.find((err, livros) => {
            res.status(200).json(livros)
    
        })
    }

}

export default LivroController