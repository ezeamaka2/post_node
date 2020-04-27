const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "collinic",
  host: "localhost",
  port: 5432,
  database: "post_node",
});

export default pool;
