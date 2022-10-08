const Tour = require('../models/Tour');
const { ObjectId } = require('mongodb');
const viewCount = require('../middleware/middleware');

exports.getAllTourServices = async (queries) => {
    const tour = await Tour.find()
        .select((queries.fields))
    return tour
}
exports.getATourServices = async (id) => {

    const tour = await Tour.findOne({ _id: ObjectId(id) })
    return tour
}

exports.updateTourService = async (tourId, data) => {
    const tour = await Tour.updateOne({ _id: tourId }, data, {
        runValidators: true,
    });
    return tour;
};

exports.addTourServices = async (data) => {
    console.log(data);
    const tour = await Tour.create(data);
    return tour
}


exports.deleteToorService = async (id) => {

    const result = await Tour.deleteOne({ _id: ObjectId(id) })
    return result
}


exports.getTourTrendingService = async () => {
    const tours = await Tour.find({}).sort({ views: -1 }).limit(3);
    return tours;
};

exports.updateTourViewCountByIdService = async (tourId) => {
    const tour = await Tour.updateOne(
        { _id: tourId },
        { $inc: { views: 1 } },
        { runValidators: true }
    );
    return tour;
};