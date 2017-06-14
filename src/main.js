const express = require("express");
const Router = express.Router;
const MainController = require("./controllers/main-controller");


const router = Router();


router.get("/api/test", MainController.test);


module.exports = router;
