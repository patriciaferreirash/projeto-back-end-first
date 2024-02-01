const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostraMulher(request, response) {
    response.json({
        nome: "Simara Conceição",
        imagem: 'https://br.freepik.com/fotos-gratis/foto-da-cintura-para-cima-de-uma-mulher-tenra-feminina-e-gentil-com-penteado-encaracolado-penteado-para-o-lado-direito-inclinando-a-cabeca-e-sorrindo-sedutor-tornando-o-olhar-romantico-para-a-camera-se-abracando-sobre-o-fundo-amarelo_19429630.htm#query=mulher%20feliz&position=16&from_view=keyword&track=ais&uuid=4135cbc2-b364-4029-b567-341b28174e74',
        minibio: 'Desenvolvedora e instrutora'
    })

}

function mostraPorta () {
    console.log("Servidor criado e rodando na porta ", porta); 
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta);
