const { SEGUROS, USER_SUBSCRIPTIONS } = require('./in-memory-db');

exports.salvarSeguro = (req, res) => {
    const seguro = req.body;

    SEGUROS.push(seguro);
    console.log('Seguro adicionado', seguro)

    res.status(200).json({message: 'Seguro adicionado com sucesso'});
}

exports.listarSeguros = (req, res) => {
    res.status(200).json(SEGUROS);
}

exports.addPushSubscriber = (req, res) => {
    const sub = req.body;

    USER_SUBSCRIPTIONS.push(sub);
    console.log('Recebido no servidor: ', sub);

    res.status(200).json({message: "Subscription adicionado com sucesso."});
}

exports.listaSubscribes = (req, res) => {
    res.status(200).json(USER_SUBSCRIPTIONS);
}