const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    location: [Number],
    zipCode: {
        type: String,
        required: true
    },
    // availableCount: {
    //     type: Number,
    //     default: 0
    // },
    // damageCount: {
    //     type: Number,
    //     default: 0
    // },
    // reservedCount: {
    //     type: Number,
    //     default: 0
    // }
},
{
    timestamps: true
});

module.exports = mongoose.model('warehouses', warehouseSchema);