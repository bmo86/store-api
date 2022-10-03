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

app.get("/ps", (req, res) => {
  res.json([
    {
      name: "Product-1",
      price: 1000

    },
    {
      name: "Product-2",
      price: 1000

    },

  ]);
});


app.get("/ps/:id", (req, res) => {
  const {id } = req.params;

  res.json({
    id,
    name:"product-2",
    price: 200
  });
});

app.get("/c/:idC/ps/:idP", (req, res) => {

  const { idC, idP } = req.params;

  res.json({
    idC,
    idP,
  });
});


app.listen(port, () => {
  console.log("Port: ", port)
})
