const { ObjectId } = require('mongodb');
const Tour = require('../models/Tour');
const { getAllTourServices, addTourServices, getATourServices, deleteToorService } = require('../services/tour.services');


exports.getAllTour = async (req, res, next) => {

    try {

        const queries = {}

        if (req.query.page) {
            const { page = 1, limit = 5 } = req.query;
            const skip = (page - 1) * Number(limit);
            query.skip = skip;
            query.limit = parseInt(limit)

        }

        const tours = await getAllTourServices(queries)
        console.log(tours);
        res.status(200).json({
            status: true,
            message: "Successfully get Tour",
            data: tours

        })

    } catch (error) {
        res.status(400).json({
            staus: false,
            message: "Tours can't founded"
        })
    }

}

// get a tour 

exports.getATour = async (req, res, next) => {

    try {
        const id = req.params;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, error: "ID is not valid" })
        }
        const tour = await getATourServices(id)

        res.status(200).json({
            status: true,
            message: "Successfully get Tour",
            data: tour

        })

    } catch (error) {
        res.status(400).json({
            staus: false,
            message: "Tours can't founded"
        })
    }

}


// add a tour

exports.addTour = async (req, res, next) => {

    try {

        console.log(req.body);
        const result = await addTourServices(req.body)
        result.logger()

        res.status(200).json({
            status: true,
            message: "Tour Added success",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            message: "tour can't added",
            error: error.message,
        })
        console.log(error.message)
    }

}


// update tour by id

exports.updateTourById = async (req, res, next) => {

    try {
        const id = req.params
        const result = await Tour.updateOne({ _id: id }, { $inc: req.body }, { runValidates: true });


        res.status(200).json({
            status: true,
            message: "Data updated Successfull",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Data can't updated",
            error: error.message,
        })
        console.log(error.message.name)
    }

}




exports.deleteTour = async (req, res, next) => {
    try {
        const id = req.params
        console.log(id);
        const result = await deleteToorService(id);
        if (!result.deletedCount) {
            return res.status(400).json({
                status: false,
                error: "Couldn't delete this Tour"
            })
        }

        res.status(200).json({
            status: true,
            message: "Successfully Tour deleted",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "product Cant't  deleted",
            error: error.message
        })

    }
};