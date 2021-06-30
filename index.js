const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { salvarSeguro, listarSeguros } = require('./seguro-service');
const webPush = require("web-push");

const vapidKeys = {
    publicKey: 'BPgK95wb6Jbpv2GpJ869vC1woFr1_2W8RVI39Eg4yCshG6_-DTA8I9bmSeeh3-Lt2IhfrtTb4o0Wp7RqV_bPXuQ',
    privateKey: 'vxGafvEEZjZ-E1WdHEzsZiUmwMUJ7l_q1OzbhOpCtvc'
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

const HOST = 'localhost';
const PORT = 9000;

const httpServer = app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}`);
})
