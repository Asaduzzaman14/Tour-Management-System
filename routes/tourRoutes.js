const express = require('express');
const router = express.Router()
const { viewCount } = require('../middleware/middleware');

const tourController = require("../controllers/tourController");


router.route("/")
    .get(tourController.getAllTour)
    .post(tourController.addTour)

router.route("/cheapest")
    .get(tourController.getCheapestTour)

router.route("/trending")
    .get(tourController.getTourTrending)


router.route("/:id")
    .get(viewCount, tourController.getATour)
    .patch(tourController.updateTourById)
    .delete(tourController.deleteTour)


module.exports = router