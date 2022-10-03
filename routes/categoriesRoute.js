const express = require("express")
//const faker = require("faker")

const r = express.Router();

/* EndPoint /c */

r.get("/c/:idC/ps/:idP", (req, res) => {

  const { idC, idP } = req.params;

  res.json({
    idC,
    idP,
  });
});


module.exports = r;
