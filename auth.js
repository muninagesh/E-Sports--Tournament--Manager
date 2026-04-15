
const router = require("express").Router();

router.post("/login", (req,res)=>{
  res.json({token:"demo-token"});
});

module.exports = router;
