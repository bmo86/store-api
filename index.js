const express = require("express")
const app = express();
const port = 3000;



app.get("/", (req, res) => {
  res.send("Hello My server")
})

app.get("/p", (req, res) => {
  res.json({
    name: "Product-1",
    price: 1000

  });
});


app.listen(port, () => {
  console.log("Port: ", port)
})
