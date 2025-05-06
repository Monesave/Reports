import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Client } = pg;

export const getDbClient = () => {
  return new Client({
    connectionString: process.env.SUPABASE_URI,
  });
};
