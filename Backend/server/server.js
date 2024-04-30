// server/server.js
const express = require('express');
require('dotenv').config();
const connectDB = require('../BDD/mongoDB');
const path = require('path');
const fs = require('fs');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.apiPath = '/api';
        this.publicPath = path.resolve(__dirname, '../public');

        // Middleware
        this.middlewares();

        // Rutas
        this.routes();

        // Conexión a la base de datos
        this.connectDB();
    }

    middlewares() {
        this.app.use(express.static(this.publicPath));
        this.app.use(express.json());
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type, x-token');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            next();
        });
    }

    routes() {
        this.app.use(this.apiPath, require('../routes/alumno.routes'));
        this.app.use(this.apiPath, require('../routes/docente.routes'));
    }

    connectDB() {
        connectDB();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`.green);
            console.log(`Rutas disponibles:`.bold);
            this.obtenerListaDeRutas().forEach(route => {
                console.log(`${this.apiPath}/${route}`.green);
            });
        });
    }

    obtenerListaDeRutas() {
        const routesPath = path.join(__dirname, '../routes');
        const files = fs.readdirSync(routesPath);
        return files.map(file => file.replace('.routes.js', ''));
    }
}

module.exports = Server;
