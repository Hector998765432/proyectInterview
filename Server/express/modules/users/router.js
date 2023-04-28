const express       = require("express");
const router        = express.Router();
const controller    = require("./controller");

router.get("/", (_, res)=>{
    res.status(200).send({
        status: "success",
        message: "Hola Mundo"
    })
})

module.exports = router