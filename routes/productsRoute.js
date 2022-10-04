const express = require("express")
const faker = require("faker")

const r = express.Router();



/* EndPoint /ps */
r.get("/", (req, res) => {

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

r.get("/filter", (req, res) => {
  res.json({
    msg: "error filter"
  });
});

r.get("/:id", (req, res) => {
  const {id } = req.params;

  res.json({
    id,
    name:"product-2",
    price: 200
  });
});

//post
r.post("/", (req, res) => {
  const body = req.body;

  res.json({
    msg  : "created Product",
    data : body
  });

});

//patch
r.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    msg  : "Update - patch, product",
    data : body,
    id,
  });
});

//delete
r.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "Delete product",
    id
  });
});


module.exports = r;
