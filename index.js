const koa = require('koa');
const app = new koa();
const views = require("koa-views");
const koaRouter = require("koa-router");
const router = new koaRouter();
const path = require("path");
const serve = require("koa-static");
const logger = require('koa-logger');
const mongoose=require("mongoose");
var bodyParser = require('koa-bodyparser');

mongoose.connect('mongodb+srv://first-server:alesya8098@cluster0-ga2qm.mongodb.net/test?retryWrites=true&w=majority', 
{useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true}, 
(err) => {if (err) throw new Error("Connected with db is faild"); console.log("connected");}
);

app.use(views(path.join(__dirname,"/views"),{
    extension: "pug",
    map: {pug: "pug"}
}));
app.use(logger());
app.use(bodyParser());

const auth = require("./routes/auth").routes();
app.use(serve(path.join(__dirname, '/public')));
router.use("/", auth)
app.use(router.routes())
    .use(router.allowedMethods())




const PORT=process.env.PORT || 8080;
app.listen(PORT, error=>{
    if (error) console.log("error")
    else console.log(`server on port ${PORT}`)
})