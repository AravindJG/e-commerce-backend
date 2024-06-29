const mongoose =  require("mongoose");

const productSchema = mongoose.Schema(
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

const Product = mongoose.model("product",productSchema);

module.exports = Product;