// const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "collinic",
//   host: "localhost",
//   port: 5432,
//   database: "post_node",
// });

// export default pool;

import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();
const connectionString = process.env.CONNECTION_STRING;
dotenv.config();

export const pool = new Pool({ connectionString });
