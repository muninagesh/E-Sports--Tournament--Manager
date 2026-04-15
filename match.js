
const router = require("express").Router();
const Match = require("../models/Match");

router.post("/", async(req,res)=>{
  const m = await Match.create(req.body);
  res.json(m);
});

router.get("/", async(req,res)=>{
  res.json(await Match.find());
});

module.exports = router;
