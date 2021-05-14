const mongoose = require('mongoose');

const products = {
    warehouseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    _id: false
}
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        default: ''
    },
    products: [products],
    mobile: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('users', userSchema);