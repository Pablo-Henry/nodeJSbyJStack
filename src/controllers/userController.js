const users = require('../mocks/users');


module.exports = {
    listUsers(request, response){
        const { order } = request.query;
        
        const sortedUsers = users.sort((a, b) => {
            if (order === 'desc') {
                return a.id < b.id ? 1 : -1;
            }

            return a.id > b.id ? 1 : -1;
        });

        response.writeHead(200, { 'Content-type': 'application/json' });
        response.end(JSON.stringify(sortedUsers));
    },

    getUserById(request, response) {
        const { id } = request.params;

        const user = users.find((user) => user.id === Number(id));  // ENCONTRA O USER DE ACORDO COM SEU ID

        if (!user) {
            response.writeHead(400, { 'Content-type': 'application/json' });
            response.end(JSON.stringify( { error: 'User not found' } ));
        } else{
            response.writeHead(200, { 'Content-type': 'application/json' });
            response.end(JSON.stringify(user));
        }
        
        
    },
};


/*4. const { order } = request.query;
Esta linha usa desestruturação de objetos (destructuring) para obter o valor do parâmetro de consulta order da URL da requisição. Por exemplo, se a URL for /users?order=desc, order terá o valor "desc". Se o parâmetro order não estiver presente na URL, order será undefined.

5. const sortedUsers = users.sort((a, b) => { ... });
Esta linha usa o método sort() do array users para criar um novo array chamado sortedUsers contendo os usuários ordenados.
A função de comparação (a, b) => { ... } define a lógica de ordenação.
if (order === 'desc') { return a.id < b.id ? 1 : -1; }: Se order for igual a "desc" (descendente), a função retorna 1 se a.id for menor que b.id (ou seja, b deve vir antes de a), e -1 caso contrário. Isso coloca os IDs maiores primeiro.
return a.id > b.id ? 1 : -1;: Se order não for "desc" (ou seja, ascendente ou ausente), a função retorna 1 se a.id for maior que b.id (ou seja, a deve vir antes de b), e -1 caso contrário. Isso coloca os IDs menores primeiro. Este é o comportamento padrão (ordem ascendente) se nenhum parâmetro order for fornecido.*/