const koa = require('koa');
const views = require('koa-views');
const path = require('path');
const koaRouter = require('koa-router');
const serve = require('koa-static');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const passport = require('./libs/passport/index');
require('./libs/mongoose');

passport.initialize();

const app = new koa();
const router = new koaRouter();

app.use(views(path.join(__dirname, '/views'), {
  extension: 'pug',
  map: { pug: 'pug' },
}));

app.use(logger());
app.use(bodyParser());
// app.use(async ctx => {
//   // the parsed body will store in ctx.request.body
//   // if nothing was parsed, body will be an empty object {}
//   ctx.body = ctx.request.body;
// });
app.use(passport.initialize());

const auth = require('./routes/auth').routes();

app.use(serve(path.join(__dirname, '/public')));
router.use('/', auth);
app.use(router.routes())
  .use(router.allowedMethods());


const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
  if (error) console.log('error');
  else console.log(`server on port ${PORT}`);
});
