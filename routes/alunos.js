var express = require('express');
var router = express.Router();
var alunos = require('../tests/mocks/alunos.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    const data = {
        title:'Alunos',
        alunos:mockData.content
    };

    res.render('list',data);

});
module.exports = router;