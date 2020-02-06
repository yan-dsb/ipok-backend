const express = require("express");
const DoctorController = require("../controllers/Home/DoctorController");

const router = express.Router();

router.get("/specialities", DoctorController.index);
router.get("/speciality", DoctorController.speciality);

module.exports = router;
