const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { salvarSeguro, listarSeguros } = require('./seguro-service');
const webPush = require("web-push");

const vapidKeys = webPush.generateVAPIDKeys();

webPush.setVapidDetails(
    'mailto:amandajardimpicoli@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));

app.route('/api/seguros').post(salvarSeguro);
app.route('/api/seguros').get(listarSeguros);

const HOST = 'http://cadastro-b-pwa.herokuapp.com/';
const PORT = 80;

const httpServer = app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}`);
})
