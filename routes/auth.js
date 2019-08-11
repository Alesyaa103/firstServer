const koaRouter = require('koa-router');
const passport = require('koa-passport');

const {
  reg, login, regpass, getSignIn, getPassword1, getPassword2, getPassword3, getChat, getPersonal,
  getSearch, getSignUp1, getSignUp2, getSignUp6, getList,
} = require('../controllers');

const router = new koaRouter();

router.get('/', getList);
router.get('signin', getSignIn);
router.get('email', getPassword1);
router.get('email/ready', getPassword2);
router.get('email/ready/reset', getPassword3);
router.get('signup', getSignUp1);
router.get('signup/complete/ready', getSignUp6);
router.get('signup/complete/:id', getSignUp2);
router.get('personal', passport.authenticate('jwt', { session: false }), getPersonal);
router.get('search', getSearch);
router.get('chat', getChat);

router.post('reg', reg);
router.post('reg-pass', regpass);
router.post('log-in', login);
module.exports = router;
