// config/Conexion.js
const { Client } = require('pg');
const Config = require('./Config');

class Conexion {
    constructor() {
        this.client = new Client({
            host: Config.DB_HOST,
            user: Config.DB_USER,
            password: Config.DB_PASSWORD,
            database: Config.DB_NAME,
            port: Config.DB_PORT,
        });
    }

    async conectar() {
        try {
            await this.client.connect();
            console.log('✅ Conexión exitosa a PostgreSQL');
        } catch (error) {
            console.error('❌ Error al conectar a PostgreSQL:', error.message);
            process.exit(1);
        }
    }

    getClient() {
        return this.client;
    }
}

module.exports = Conexion;