import path from 'path';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Obtenha o caminho absoluto para o arquivo do banco de dados
const dbPath = path.join(process.cwd(), 'src/app/db/database.db');

// Função para inicializar o banco de dados
export async function initializeDatabase() {
    const db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
    });

    return db;
}

// Função para conectar ao banco de dados
export async function connectToDatabase() {
    try {
        const db = await initializeDatabase();
        return db;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}
