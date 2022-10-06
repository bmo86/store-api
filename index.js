const express = require("express");
const routeApi = require("./routes/index");

const {logErrors,errorHandler,BoomErrorHandler} = require("./middlewares/errorHandler")
const app = express();
const port = 3000;


app.use(express.json());

routeApi(app);

app.use(logErrors);
app.use(BoomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log("Port: ", port)
})
