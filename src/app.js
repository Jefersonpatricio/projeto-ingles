const express = require('express');
const ejs = require('ejs');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/aulas', (req, res) => {
    res.render('aulas');
});
app.get('/professores', (req, res) => {
    res.render('professores');
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});