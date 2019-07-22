const koaRouter = require("koa-router");
const {getSignIn, getPassword1, getPassword2, getPassword3, getChat, getPersonal, getSearch, getSignUp1, getSignUp2, getSignUp6, getList} = require("../controllers");
const router = new koaRouter();

router.get("/", getList)
router.get("/sign", getSignIn)
router.get("email", getPassword1)
router.get("email/ready", getPassword2)
router.get("email/ready/reset", getPassword3)
router.get("sign", getSignUp1)
router.get("sign/complete", getSignUp2)
router.get("sign/complete/ready", getSignUp6)
router.get("personal", getPersonal)
router.get("search", getSearch)
router.get("chat", getChat)


module.exports = router;
 