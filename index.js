const express = require("express")
const faker = require("faker")
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

  const { limit } =  req.query

  if (!limit) {
    res.json({msg:"No params"})
  }
  const p = []

  for (let i = 0; i < limit; i++) {
    p.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(p);

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


app.get("/user", (req, res) => {
  const { limit, offset } = req.query

  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.json({
      msg:"Nothing params"
    });
  }
});



app.listen(port, () => {
  console.log("Port: ", port)
})
