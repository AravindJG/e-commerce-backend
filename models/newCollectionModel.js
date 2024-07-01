const mongoose =  require("mongoose");

const newCollectionSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true,
            required: true
        },
        name: {
            type: String,
            requied: true
        },
        category: {
            type: String,
            requied: true
        },
        image: {
            type: String,
            requied: true
        },
        new_price: {
            type: Number,
            requied: true
        },
        old_price: {
            type: Number,
            requied: true
        }
    }
)

const NewCollection = mongoose.model("newCollection",newCollectionSchema);

module.exports = NewCollection;