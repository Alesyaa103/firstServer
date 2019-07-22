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
    }
}