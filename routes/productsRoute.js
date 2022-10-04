const express = require("express")
const serviceP = require("./../services/productServices");

const r = express.Router();
const service = new serviceP();


/* EndPoint /ps */
r.get("/", (req, res) => {
  const p = service.find();
  res.json(p);
});

r.get("/filter", (req, res) => {
  res.json({
    msg: "error filter"
  });
});

r.get("/:id", (req, res) => {
  const {id } = req.params;
  const p = service.findOne(id);
  res.json(p);
});

//post
r.post("/", (req, res) => {
  const body = req.body;

  res.status(201).json({
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
