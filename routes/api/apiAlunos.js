const db = require('../../config/config_database')

var express = require('express');
var router = express.Router();

//http://localhost:3000/api/v1/alunos

router.get('/', async function(req, res, next) {
    const query = 'SELECT * FROM alunos';
    try {

        const data = await db.any(query);
        res.status(200).json(data);
        
    } catch (error) {
        res.status(400).json({msg: error.message});
        
    }
});

router.get('/:matricula', function(req, res, next) {
    const {matricula} =  req.params;
    const query = `
    SELECT * 
    FROM alunos
    WHERE matricula = $1`
    ;
    
});
router.post('/create', function(req, res, next){ 
    const query = `
    INSERT 
    INTO alunos (matricula, nome, email, data_nascimento) 
    VALUES ($1,$2,$3,$4)`
    ;
    
    const novoAluno = req.body;
    const matricula = novoAluno.matricula;
    alunos.content[matricula] = {
        ...novoAluno};

        const response = {
        msg : "aluno criado com sucesso",

        aluno : alunos.content[matricula]
        }
        res.status(201).json (alunos.content[matricula])
    
    
});
router.put('/:matricula', function (req, res, next) {
    //const {body, method} = req;
    const { matricula } = req.params;
    const novoAluno = req.body;
    alunos.content[matricula] = {
        ...novoAluno,
        matricula: Number(matricula)
    }
    //res.send({body, method, msg:'altera usuario'});
    res.redirect('/alunos');
});
router.delete('/:matricula', function (req, res, next) {
    const matricula = req.params.matricula;
    delete alunos.content[matricula];
    const response = {
        msg : "aluno criado com Removido!",
        aluno : alunos.content[matricula]
        }
        res.status(201).json (alunos.content[matricula])
    res.redirect(303, '/alunos');
});
module.exports = router;