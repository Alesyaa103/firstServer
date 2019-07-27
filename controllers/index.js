const User=require("../models/User");
module.exports = {
    async getList(ctx, next){
        await ctx.render("list")
    },
    async getSignIn(ctx, next){
        await ctx.render("signIn")
    },
    async getPassword1(ctx, next){
        await ctx.render("password1")
    },
    async getPassword2(ctx, next){
        await ctx.render("password2")
    },
    async getPassword3(ctx, next){
        await ctx.render("password3")
    },
    async getSignUp1(ctx, next){
        await ctx.render("signUp1")
    },
    async getSignUp2(ctx, next){
        await ctx.render("signUp2")
    },
    async getSignUp6(ctx, next){
        await ctx.render("signUp6")
    },
    async getPersonal(ctx, next){
        await ctx.render("personal")
    },
    async getSearch(ctx, next){
        await ctx.render("search")
    },
    async getChat(ctx, next){
        await ctx.render("chat")
    },
    // async reg(ctx, next){
    //     const {firstname, lastname, email, username} =ctx.request.body;
    //     try{
    //         const find= await User.find({email, username});
    //         if (find.length!=0){
    //             throw new Error("same person already exist");
    //         }
    //         else{
    //             const newUser= new User({firstname, lastname, email, username});
    //             await User.create(newUser);
    //             ctx.redirect("signup/complete");
    //         }
    //     }
    //     catch(err){
    //         throw new Error("something's gone wrong")
    //     }
    // },
  
}
