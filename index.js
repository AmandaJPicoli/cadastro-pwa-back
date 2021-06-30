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

const PORT = process.env.PORT|| 8080;

const httpServer = app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
