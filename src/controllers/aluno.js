const alunoService = require('../services/aluno')

const getAluno = async(req, res, next) => {
    try{
        const retorno = await alunoService.getAluno(req.params)
        res.status(201).json(retorno)
    }catch{
        res.status(500).send(err)
    }
}

module.exports.getAluno = getAluno