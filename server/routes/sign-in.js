const express = require("express");
const router = express.Router();
const path = require("path");

router.route("/")
    .get(function(req,res){
        res.sendFile(path.resolve("views/signin.html"))
    });

//  router.get('/', (req, res) => {
//     res.sendFile(path.resolve("views/signin.html"))
//       })

module.exports = router;