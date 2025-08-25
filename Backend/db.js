import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, 
});

// Test connection immediately
pool.connect()
  .then(client => {
    console.log(" Connected to PostgreSQL database successfully!");
    client.release();
  })
  .catch(err => {
    console.error(" Error connecting to PostgreSQL database:", err.message);
  });

export default pool; 