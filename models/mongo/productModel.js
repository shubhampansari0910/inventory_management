const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        default: ''
    },
    storageType: {
        type: String,
        enum: ['normal','cold','hazard']
    },
    isArchived: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('products', productSchema);