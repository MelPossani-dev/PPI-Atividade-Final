import express from 'express';
import process from 'process';
import path from 'path';
import session from 'express-session';
import { error } from 'console';

const host='0.0.0.0'; 
const porta = 4000;  
const app = express();

app.use(session({
    secret: '$&n#@',
     resave: false,
    saveUninitialized: true,
    cookie: {  
         maxAge: 60 * 1000 * 15
    }
 }))
 
 
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

 app.listen(porta, host, ()=>{
    console.log(`Servidor escutando em http://${host}:${porta}`);
})
