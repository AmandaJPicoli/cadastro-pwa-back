const { SEGUROS, USER_SUBSCRIPTIONS } = require('./in-memory-db');

exports.salvarSeguro = (req, res) => {
    const seguro = req.body;

    SEGUROS.push(seguro);
    console.log('Seguro adicionado', seguro)

    res.status(200).json({message: 'Seguro adicionado com sucesso'});
}

exports.atualizarSeguro = (req, res) => {
    const index = req.params;
    const seguros = req.body;
    
    SEGUROS[index] = seguros;

    console.log('Seguro atualizado', seguro)

    res.status(200).json({message: `Seguro atualizado com sucesso`});
}

exports.listarSeguros = (req, res) => {
    res.status(200).json(SEGUROS);
}

exports.listarSeguroPorID = (req, res) => {
    const index = req.params;

    res.status(200).json(SEGUROS[index]);
}

exports.deletarSeguro = (req, res) => {
    const index = req.params;

    SEGUROS.splice(index, 1);

    console.log('Seguro excluido', seguro)

    res.status(200).json({message: `Seguro de excluido com sucesso`});
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

