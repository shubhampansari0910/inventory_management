const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    totalQuantity: {
        type: Number,
        default: 0
    },
    totalPrice: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('activities', activitySchema);