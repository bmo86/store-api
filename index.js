const express = require("express");
const routeApi = require("./routes/index");
const app = express();
const port = 3000;


app.use(express.json());

routeApi(app);


app.listen(port, () => {
  console.log("Port: ", port)
})
