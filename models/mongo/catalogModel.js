const mongoose = require('mongoose');

stocks = {
    availableProducts: Number,
    damagedProducts: Number,
    reservedProducts: Number,
    _id: false
}
const catalogSchema = new mongoose.Schema({
    warehouseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    stocks: stocks
},
{
    timestamps: true
});

module.exports = mongoose.model('catalogs', catalogSchema);