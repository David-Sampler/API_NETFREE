


const restify = require('restify')
const app = restify.createServer({ version: 1.0, name: "video" });
const mongoose = require('mongoose');

app.get('/', function (req, res, next) {
    res.send(200, 'hello world');
    return next();
})




const router = require('./router/routers')




app.use(restify.plugins.bodyParser({ mapParams: true }));
app.use(restify.plugins.acceptParser(app.acceptable));
app.use(restify.plugins.queryParser({ mapParams: true }));
app.use(restify.plugins.fullResponse());


//router(app)

app.listen(process.env.PORT || 3000, () => { console.log("Conectado com sucesso") }
)