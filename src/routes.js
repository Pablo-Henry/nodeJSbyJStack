const userController = require('./controllers/userController')


module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: userController.listUsers,      //FUNÇÃO EXECUTADA TODA VEZ QUE A ROTA É CHAMADA. (SÓ É EXECUTADO SE O MÉTODO E O ENDPOINT FOREM IGUAIS PERANTE A FUNÇAÕ ROUTE.FIND())
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: userController.getUserById,      //FUNÇÃO EXECUTADA TODA VEZ QUE A ROTA É CHAMADA. (SÓ É EXECUTADO SE O MÉTODO E O ENDPOINT FOREM IGUAIS PERANTE A FUNÇAÕ ROUTE.FIND())
    },
];

//  A FUNÇÃO HANDLER NÃO ESTA SENDO EXECUTADA ACIMA, APENAS ESTOU PASSANDO A REFERÊNCIA DA MESMA. EX ROUTES[0].HANDLER(REQUEST, RESPONSE)