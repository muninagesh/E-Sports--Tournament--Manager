
const router = require("express").Router();

let tournaments = [];

router.post("/", (req,res)=>{
  tournaments.push(req.body);
  res.json(req.body);
});

router.get("/", (req,res)=>res.json(tournaments));

module.exports = router;
