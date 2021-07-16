const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { salvarSeguro, listarSeguros, addPushSubscriber, listaSubscribes, atualizarSeguro, listarSeguroPorID } = require('./seguro-service');
const webPush = require("web-push");

const vapidKeys = {
    publicKey: 'BDFrBHaiWGxRJWP6uiGrZAyyscbY0HOz863iUWobn7uXwAIqohygEmhJxdHH6OO9sQRFJr0na1WVst_YmwIzb1E',
    privateKey: 'nln9T4LKqkfuPBR35MhItevoGmcuH8Uc2-4fjIhYw30'
}

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
app.route('/api/seguros/:index').put(atualizarSeguro);
app.route('/api/seguros/:index').delete(deletarSeguros);
app.route('/api/seguros/:index').get(listarSeguroPorID);
app.route('/api/notifications').post(addPushSubscriber);
app.route('/api/notifications').get(listaSubscribes);

const PORT = process.env.PORT|| 8080;

const httpServer = app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})

