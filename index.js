import express from 'express';
import process from 'process';
import path from 'path';
import session from 'express-session';
import { error } from 'console';
import rotaSecretaria from './Rotas/rotaSecretaria.js';
import autenticar from './segurança/autenticar.js';
import Secretarias from './Modelos/secretaria.js';

const host='0.0.0.0'; 
const porta = 4000;  
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); 

app.use(session({
    secret: '$&n#@',
     resave: false,
    saveUninitialized: true,
    cookie: {  
         maxAge: 60 * 1000 * 15
    }
 }))
 //teste
 
app.use(express.static(path.join(process.cwd(), 'publico')));
 
app.post('/login', (requisicao, resposta)=>{
    const { usuario, senha } = requisicao.body;
    if (usuario && senha && usuario === 'Leandro' && senha === '0526'){
        requisicao.session.usuarioLogado = true;
        resposta.redirect("/main.html");
    } 
    else{
        resposta.redirect('/login.html');
   }
 })
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use('/secretarias', rotaSecretaria);


app.use(autenticar, express.static(path.join(process.cwd(), 'privado')));

app.use('/controle', rotaSecretaria);
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(porta, host, ()=>{
    console.log(`Servidor escutando em http://${host}:${porta}`);
})
/*
const secretaria = new Secretarias(0);
secretaria.setor = 'Sao Paulo';
secretaria.nome_secretaria = 'Mario da Souza';
secretaria.titular = 'Mario da Souza';
secretaria.cpf = '148.111.255-35';

    



secretaria.gravar().then(() => {
console.log('Cliente Cadastrado com sucesso');
}).catch((erro) => {
console.log(erro.message);
});*/
