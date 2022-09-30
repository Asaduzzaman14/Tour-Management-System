const { mongoose } = require("mongoose");

// SCHEMA > MODEL > QUERY 


// Schema design
const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a name for this Tour"],
        trim: true,
        unique: [true, "Name Must be unique"],
        minLength: [3, "Name must be at least 3 chearacters."],
    },
    // details: {
    //     type: String,
    //     required: true,
    // },
    price: {
        type: Number,
        required: true,
        min: [0, "Price Can't be negative"],
    },

}, {
    timestamps: true,
});


//mongoose middleware for saving data: pre/post

// tourSchema.pre("save", function (next) {
//     console.log("Before saving data");
//     if (this.quantity == 0) {
//         this.status = "out-of-stock"
//     }
//     next()
// })

tourSchema.methods.logger = function () {
    console.log(`Data save for ${this.name}`);
}


// model

const Tour = mongoose.model("tour", tourSchema)


module.exports = Tour;