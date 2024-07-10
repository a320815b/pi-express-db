var express = require('express');
var router = express.Router();
let alunos = require('../../tests/mocks/alunos.json')
/* GET users listing. */
router.get('/', function(req, res, next) {
    try {
        res.status(200).json(alunos);
        
    } catch (error) {
        res.status(400).json({msg: error.message});
        
    }
});

router.get('/:matricula', function(req, res, next) {
    const {matricula} =  req.params;
    const aluno = alunos.content[matricula];
    res.render('card',{title:'Detalhe dos alunos', aluno})
});
// router.get('/edit/:matricula', function(req, res, next) {
//     const {matricula} =  req.params;
//     const parametro = matricula
//     const aluno = alunos.content[matricula];
//     const data = {aluno, metodo: "put", parametro, title: "editar aluno", buttonText: "salvar alteraçoes"}
//     res.render('form', data);
// });
router.post('/create', function(req, res, next){ 
    {
    const novoAluno = req.body;
    const matricula = novoAluno.matricula;
    alunos.content[matricula] = {
        ...novoAluno};

        const response = {
        msg : "aluno criado com sucesso",
        aluno : alunos.content[matricula]
        }
        res.status(201).json (alunos.content[matricula])
    };
    
});
router.put('/:matricula', function (req, res, next) {
    //const {body, method} = req;
    const { matricula } = req.params;
    const novoAluno = req.body;
    alunos.content[matricula] = {
        ...novoAluno,
        matricula: Number(matricula)
        
        const response = {
            msg : "aluno criado com Atualizido com sucesso!",
            aluno : alunos.content[delete]
            }
            res.status(201).json (alunos.content[matricula])
    };
    //res.send({body, method, msg:'altera usuario'});
    res.redirect('/alunos');
});
router.delete('/:matricula', function (req, res, next) {
    const matricula = req.params.matricula;
    delete alunos.content[matricula];
    const response = {
        msg : "aluno criado com Removido!",
        aluno : alunos.content[delete]
        }
        res.status(201).json (alunos.content[delete])
    res.redirect(303, '/alunos');
});
module.exports = router;
-- Remove o banco de dados, caso exista
DROP DATABASE exemplo_db;

-- Criar o banco de dados
CREATE DATABASE exemplo_db;

-- Conectar ao banco de dados exemplo
\c exemplo_db

-- Criar a tabela alunos
CREATE TABLE alunos (
    matricula INT PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(255),
    data_nascimento DATE
);

-- Inserir 8 linhas na tabela alunos
INSERT INTO alunos (matricula, nome, email, data_nascimento) VALUES
(1, 'Ana Silva', 'ana.silva@example.com', DATE '2000-01-15'),
(2, 'Bruno Souza', 'bruno.souza@example.com', DATE '1999-05-22'),
(3, 'Carla Pereira', 'carla.pereira@example.com', DATE '2001-09-10'),
(4, 'Daniel Santos', 'daniel.santos@example.com', DATE '2000-11-30'),
(5, 'Eduarda Lima', 'eduarda.lima@example.com', DATE '1998-12-05'),
(6, 'Fernando Costa', 'fernando.costa@example.com', DATE '1997-07-18'),
(7, 'Gabriela Oliveira', 'gabriela.oliveira@example.com', DATE '1999-03-27'),
(8, 'Henrique Alves', 'henrique.alves@example.com', DATE '2001-08-16');