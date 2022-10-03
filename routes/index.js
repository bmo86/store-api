const productRouter = require("./productsRoute")
const userRouter = require("./usersRoute")
const categoriesRouter = require("./categoriesRoute")



function routerApi(app) {
  app.use("/ps", productRouter);
  app.use("/usr", userRouter);
  app.use("/c", categoriesRouter);
}


module.exports = routerApi;
