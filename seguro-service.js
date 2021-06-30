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

    console.log('Received Subscription on the server: ', sub);

    USER_SUBSCRIPTIONS.push(sub);

    res.status(200).json({message: "Subscription added successfully."});
}
