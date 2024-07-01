const mongoose =  require("mongoose");

const popularSchema = mongoose.Schema(
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

const Popular = mongoose.model("popular",popularSchema);

module.exports = Popular;