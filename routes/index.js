const express = require("express");
const productRouter = require("./productsRoute");
const userRouter = require("./usersRoute");
const categoriesRouter = require("./categoriesRoute");



function routerApi(app) {

  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/ps", productRouter);
  router.use("/usr", userRouter);
  router.use("/c", categoriesRouter);
}


module.exports = routerApi;
