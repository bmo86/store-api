const express = require("express")
const categoriesService = require("./../services/categoriesService")

const r = express.Router();

const service = new categoriesService();

/* EndPoint /c */

r.get("/", async (req, res) => {
  const c = await service.find();
  res.json(c);
});

r.get("/:id", async (req, res) => {
  const { id } = await req.params;
  res.json(service.findOne(id));
});


r.post("/", async (req, res) => {
  const body = req.body
  const newCategorie = await service.created(body)
  res.status(201).json({
    msg: "Created Categorie",
    data: {
      ...newCategorie
    }
  })

})

r.patch("/:id", async (req, res) => {

  try {
    const { id } = req.params
    const rta = await service.Update(id)
    res.json({
      msg : "User Update",
      data: {
        ...rta
      }
    })
  } catch (error) {
    res.status(404).json({ msg : error.message })
  }

})

r.delete("/:id", async (req, res) => {

  try {
    const { id } = req.params
    const rta = await service.delete(id)
    res.json({
      msg : "Delete User",
      ...rta
    })
  } catch (error) {
    res.status(404).json({ msg: error.message})
  }

})


module.exports = r;
