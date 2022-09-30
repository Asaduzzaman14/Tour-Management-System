const Tour = require('../models/Tour');
const { ObjectId } = require('mongodb');

exports.getAllTourServices = async (queries) => {
    const tour = await Tour.find({})
    return tour
}
exports.getATourServices = async (id) => {

    const tour = await Tour.findOne({ _id: ObjectId(id) })
    return tour
}


exports.addTourServices = async (data) => {
    const tour = await Tour.create(data);
    return tour
}

exports.deleteToorService = async (id) => {

    const result = await Tour.deleteOne({ _id: ObjectId(id) })

    return result
}