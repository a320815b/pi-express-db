const pgp = require('pg-promise')(/* options */)
const db = pgp(`postgres://postgres:postgres@localhost:5432/exemplo_bd`);

module.exports = db;