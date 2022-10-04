const express = require("express")
const serviceP = require("./../services/productServices");

const r = express.Router();
const service = new serviceP();


/* EndPoint /ps */
r.get("/", async (req, res) => {
  const p = await service.find();
  res.json(p);
});

r.get("/filter", (req, res) => {
  res.json({
    msg: "error filter"
  });
});

r.get("/:id", async (req, res) => {
  const { id } = req.params;
  const p = await service.findOne(id);
  res.json(p);

});

//post
r.post("/", async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);

  res.status(201).json({
    msg  : "created Product",
    data : {
      ...newProduct
    }
  });

});

//patch
r.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const p = await service.update(id, body);
    res.json({
      msg   :"Update",
      data  : {
        ...p
      }
    });
  } catch (error) {
    res.status(404).json({ msg : error.message})
  }
});

//delete
r.delete("/:id", async (req, res) => {

  try {
    const { id } = req.params;
    const rta = await service.delete(id)

    res.json({
      msg : "Delete product",
      ...rta
    });
  } catch (error) {
    res.status(404).json({
      msg : error.message
    })
  }

});


module.exports = r;
