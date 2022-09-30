const express = require('express');
const router = express.Router()
const viewCount = require('../middleware/middleware');

const tourController = require("../controllers/tourController");


router.route("/")
    .get(tourController.getAllTour)
    .post(tourController.addTour)


router.route("/:id")
    .patch(tourController.updateTourById)
    .delete(tourController.deleteTour)
    .get(viewCount, tourController.getATour)


module.exports = router