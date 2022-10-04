const express = require("express")
const UserService = require("./../services/userSErvice")

const r = express.Router();
const service = new UserService();
/* EndPoint /usr */

r.get("/", async (req, res) => {
  const usr = await service.find();
  res.json(usr);
});

r.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json( await service.fincOne(id) )
})

r.post("/", async (req, res) => {
  const body = req.body
  const data = await service.create(body)

  res.status(201).json({
    msg : "User - Created",
    data: {
      ...data
    }
  })
})

r.patch("/:id", async (req, res) => {

  try{
    const { id } = req.params
    const userUpdate = await service.update(id)
    res.json({
      msg : "User Update",
      data: {
        ...userUpdate,
      }
    })
  } catch(error){
    res.status(404).json({ msg : error.message })
  }
})

r.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const rta = await service.delete(id)

    res.json({
      msg : "Delete - user",
      ...rta,
    })

  } catch(error){
    res.status(404).json({ msg : error.message })
  }
})


module.exports = r;
