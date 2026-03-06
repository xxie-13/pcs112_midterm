const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//Route to get all users
router.get("/enrollment", userController.getAllEnroll);

//router.get('/users/:,ip_address',userController.getUserByIp);
router.post("/enrollment", userController.createEnroll);

module.exports = router;
