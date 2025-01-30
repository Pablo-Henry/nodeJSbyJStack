const http = require('http'); //importa os modulos HTTPS
const { URL } = require('url');

const routes = require('./routes');

//Utilizando arrow function
const server = http.createServer((request, response) => {
    const parsedUrl = new URL(`https://localhost:3000${request.url}`);
    
    console.log(` Request method: ${request.method} | Endpoint ${parsedUrl.pathname}`);

    //VERIFICA SE A ROTA INFORMADA PELO USER EXISTE 
    const route = routes.find((routeObj) => (
        routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method
    ));

    //CASO A ROTA EXISTA ENTRA NO LOOP DO IF, CASO CONTRÁRIO ENTRA NO ELSE
    if (route) {
        request.query = Object.fromEntries(parsedUrl.searchParams);
        route.handler(request, response);
    } else{
        response.writeHead(404, { 'Content-type': 'text/html' });
        response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
    }


    
    // if (request.url === '/users'  && request.method === 'GET'){
    //     userController.listUsers(request, response);

    // } else {
    //     
        

    //     // response.writeHead(200, { 'Content-type': 'text/html' });
    //     // response.end('<h1>Hello World!</h1>');
    // }

    
        
    });

server.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));



//FORMATO PADRÃO UTILIZANDO FUNÇÕES 

// const server = http.createServer(function(request, response) {
//     response.writeHead(200, { 'Content-type': 'text/html' });
//     response.end('<h1>Hello World!</h1>');
// });

// server.listen(3000, function() {
//     console.log('Server started at http://localhost:3000')
// });

