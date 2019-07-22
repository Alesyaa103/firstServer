const koa = require('koa');
const app = new koa();
const views = require("koa-views");
const koaRouter = require("koa-router");
const router = new koaRouter();
const path = require("path");
const serve = require("koa-static");

app.use(views(path.join(__dirname,"/views"),{
    extension: "pug",
    map: {pug: "pug"}
}))


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