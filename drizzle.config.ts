import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

// 1. Tambahkan baris ini untuk MEMAKSA pembacaan file .env
dotenv.config();

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'turso', // Tetap 'sqlite' karena Turso menggunakan mesin SQLite/LibSQL
  dbCredentials: {
    // 2. Gunakan '!' atau 'as string' untuk menghilangkan warna merah di VS Code
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});