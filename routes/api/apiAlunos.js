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