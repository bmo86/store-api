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

r.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const p = await service.findOne(id);
    res.json(p);
  } catch (error) {
    next(error)
  }


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
r.patch("/:id", async (req, res, next) => {
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
    next(error)
  }
});

//delete
r.delete("/:id", async (req, res, next) => {

  try {
    const { id } = req.params;
    const rta = await service.delete(id)

    res.json({
      msg : "Delete product",
      ...rta
    });
  } catch (error) {
    next(error)
  }

});


module.exports = r;
