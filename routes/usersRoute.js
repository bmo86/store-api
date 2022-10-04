const express = require("express")
const UserService = require("./../services/userSErvice")

const r = express.Router();
const service = new UserService();
/* EndPoint /usr */

r.get("/", (req, res) => {
  const usr = service.find();
  res.json(usr);
});

r.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json(service.fincOne(id))

})


module.exports = r;
