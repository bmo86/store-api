const express = require("express")
//const faker = require("faker")

const r = express.Router();

/* EndPoint /usr */

r.get("/", (req, res) => {
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

module.exports = r;
