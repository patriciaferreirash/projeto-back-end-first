const express = require("express"); //aqui estou iniciando o express
const router = express.Router(); //aqui estou configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid'); //aqui estou usando a biblioteca uuid que cria ids. 

const conectaBancoDeDados = require('./bancoDeDados')//aqui estou ligando ao arquivo bancoDeDados
conectaBancoDeDados()//aqui estou chamando a função que conecta o bando de dados

const app = express(); //aqui estou iniciando o app
app.use(express.json()); //usado para tratar as requisições, deixando os dados que vão trafegar a partir da requisição também em json
const porta = 3333; //aqui estou criando a porta

//aqui estou criando lista inicial de mulheres
const mulheres = [
    {   
        id:'1',
        nome: 'Simara Conceição',
        imagem: 'https://br.freepik.com/fotos-gratis/foto-da-cintura-para-cima-de-uma-mulher-tenra-feminina-e-gentil-com-penteado-encaracolado-penteado-para-o-lado-direito-inclinando-a-cabeca-e-sorrindo-sedutor-tornando-o-olhar-romantico-para-a-camera-se-abracando-sobre-o-fundo-amarelo_19429630.htm#query=mulher%20feliz&position=16&from_view=keyword&track=ais&uuid=4135cbc2-b364-4029-b567-341b28174e74',
        minibio: 'Desenvolvedora e instrutora'
    }, 
    {
        id:'2',
        nome: 'Iana Chan',
        imagem: 'https://br.freepik.com/fotos-gratis/foto-da-cintura-para-cima-de-uma-mulher-tenra-feminina-e-gentil-com-penteado-encaracolado-penteado-para-o-lado-direito-inclinando-a-cabeca-e-sorrindo-sedutor-tornando-o-olhar-romantico-para-a-camera-se-abracando-sobre-o-fundo-amarelo_19429630.htm#query=mulher%20feliz&position=16&from_view=keyword&track=ais&uuid=4135cbc2-b364-4029-b567-341b28174e74',
        minibio: 'Desenvolvedora e instrutora'
    },
    {   
        id:'3',
        nome: 'Nina Simone',
        imagem: 'https://br.freepik.com/fotos-gratis/foto-da-cintura-para-cima-de-uma-mulher-tenra-feminina-e-gentil-com-penteado-encaracolado-penteado-para-o-lado-direito-inclinando-a-cabeca-e-sorrindo-sedutor-tornando-o-olhar-romantico-para-a-camera-se-abracando-sobre-o-fundo-amarelo_19429630.htm#query=mulher%20feliz&position=16&from_view=keyword&track=ais&uuid=4135cbc2-b364-4029-b567-341b28174e74',
        minibio: 'Desenvolvedora e instrutora'
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres);
}

//POST
function criaMulher(request, response) {
const novaMulher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if(mulher.id === request.params.id) {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    response.json(mulheres)
}

//DELETE
function deletaMulher(request, response) {
    function todasMenosEla(mulher) {
        if(mulher.id !== request.params.id) {
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

app.use(router.get('/mulheres', mostraMulheres)); //configurei rota GET /mulheres
app.use(router.post('/mulheres', criaMulher));//configurei rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher));//configurei rota PATCH /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher));//configurei rota DELETE /mulheres/:id


//PORTA
function mostraPorta () {
    console.log("Servidor criado e rodando na porta ", porta); 
}


app.listen(porta, mostraPorta); //servidor ouvindo a porta
