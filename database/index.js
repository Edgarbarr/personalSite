const Pool = require("pg").Pool;

const pool = new Pool({
    database: "rare"
})



module.exports= pool;
