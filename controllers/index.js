const passport = require('koa-passport');
const User = require('../models/User');
const config= require('config');

const jwt = require('jwt-simple'); // аутентификация по JWT для hhtp

module.exports = {
  async getList(ctx, next) {
    await ctx.render('list');
  },
  async getSignIn(ctx, next) {
    await ctx.render('signIn');
  },
  async getPassword1(ctx, next) {
    await ctx.render('password1');
  },
  async getPassword2(ctx, next) {
    await ctx.render('password2');
  },
  async getPassword3(ctx, next) {
    await ctx.render('password3');
  },
  async getSignUp1(ctx, next) {
    await ctx.render('signUp1');
  },
  async getSignUp2(ctx, next) {
    await ctx.render('signUp2');
  },
  async getSignUp6(ctx, next) {
    await ctx.render('signUp6');
  },
  async getPersonal(ctx, next) {
    await ctx.render('personal');
  },
  async getSearch(ctx, next) {
    await ctx.render('search');
  },
  async getChat(ctx, next) {
    await ctx.render('chat');
  },
  async reg(ctx, next) {
    const {
      firstname, lastname, email, username,
    } = ctx.request.body;
    try {
      const Find = await User.find({ email, username });
      if (Find.length !== 0) {
        throw new Error('same person already exist');
      } else {
        const newUser = new User({
          firstname, lastname, email, username,
        });
        await User.create(newUser);
        const Find = await User.find({ email });
        const userId = Find[0]._id;
        ctx.redirect(`signup/complete/${userId}`);
      }
    } catch (err) {
      throw new Error("something's gone wrong");
    }
  },
  async regpass(ctx, next) {
    //const id = ctx.params.id
    const url = ctx.request.header.referer;
    const constid = url.substring(url.length - 24, url.length);
    const { password1, password2 } = ctx.request.body;
    if (password1 === password2) {
      try {
        const user = await User.findById(constid);
        user.password = password1;
        await user.save();
        ctx.redirect('signup/complete/ready');
      } catch (err) {
        throw new Error("something's gone wrong");
      }
    } else {
      ctx.response.status = 403;
    }
  },
  async login(ctx, next) {
    await passport.authenticate('local', (err, user) => {
      console.log(config.get("jwtSecret"));
      if (user) {
        const payload = {
          id: user._id,
        };
        ctx.body = {
        token: jwt.encode(payload, config.get("jwtSecret")),
        }
        //ctx.redirect('personal');
      } else {
        ctx.body = {
          error: err,
        };
      }
    })(ctx, next);
  },
  async getPersonal(ctx){
    ctx.body = 'Secret content';
  }
};
