var express = require("express");
var router = express.Router();
var alunos = require("../tests/mocks/alunos.json");
const { send, header, redirect } = require("express/lib/response");

/* GET home page. */
router.get("/", function (req, res, next) {
    const data = {
        title: "Alunos",
        alunos: alunos,
    };

    res.render("list", data);
});
router.get("/new", function (req, res, next) {
    res.render("form", { title: "Novo Aluno", buttonText: "Adicionar Aluno" });
});

router.get("/:matricula", function (req, res, next) {
    const { matricula } = req.params;
    const aluno = alunos.content[matricula];
    res.render("card", { title: "Detalhe do Aluno", aluno });
});



router.get("/new", function (req, res, next) {
    const {heads:label}= alunos;
    const data = {metodo:'POST',paramento:'create',title:'Novo Aluno',buttonText:'Adicionar Aluno'}

    res.render('fom',data);
});
router.post('/create',function(req,res,next){
    const novoAluno = req.body;
    const matricula= novoAluno.matricula;

    alunos.content[matricula]= {
        ...novoAluno,
        matricula: Number(matricula),      
        
    }
    res.redirect('/alunos');
})


router.get("/edit/:matricula", function (req, res, next) {
    const { matricula } = req.params;
    const paramento = matricula
    const aluno = alunos.content[matricula];
    const data = {aluno, metodo:'PUT',title: 'Editar Aluno ',buttonText:'salvar alterações'}
    
    res.render("form", data);
    
});
router.post('/', function (req, res, next) {
    const {body,method} = req
    res.send({body,method})
});

router.put('/', function (req, res, next) {
    const{matricula} = req.params
    const nomeAluno = req.body;

    alunos.content[matricula] = {
        ...novoAluno, 
    matricula : Number(matricula)

    }
    // res.send({body,  method, msg:'adicionar'});
    res.redirect('/alunos');
});
router.delete('/', function (req, res, next) {
    const {body,method} = req
    res.send({body, method, msg: 'remover aluno'});
});




module.exports = router;
