
import livros from "../models/Livro.js"

class LivroController {

    static ListarLivros = (req, res) =>{
        livros.find((err, livros) => {
            res.status(200).json(livros)
    
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if (err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar livro.`})
            } else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static listarLivrosPorId = (req, res) => {
        const id = req.params.id

        livros.findById(id, (err, livros) =>{
            if (err){
                res.status(400).send({message: `${err.message} - Id do livro n�o localizado.`})        
            } else {
                res.status(200).send(livros)
            }
        })

    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id
        
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro Atualizado com Sucesso!'})
            }
            else {
                res.status(500).send({message: `${err.message} - Falha ao atualizar livro.`})
            }
        })

    }

}

export default LivroController