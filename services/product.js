const { ProductMongoModel, WarehouseMongoModel } = require('../models/index');
const Promise = require('bluebird');
const response = require('../constants/responseConstants')
const _ = require('lodash')
const { v4: uuidv4 } = require('uuid');

module.exports = {

    createProduct: async (req, res) => {
        let productDetails = req.body;

        if(!productDetails) return response.errorResponse(400, 'Bad Request')

        let product = await ProductMongoModel.create(productDetails)
        if(!product) return response.errorResponse(500, 'Internal server Error');
        
        return response.successResponse(product);
    },

    getProduct: async (productId) =>
    {
        let product = await ProductMongoModel.findOne({ _id: productId })
        if(!product) return response.errorResponse(404, 'NOT_FOUND');

        return response.successResponse(product);
    },

    getProductsByFilter: async (req) =>
    {
        const { category, minPrice, maxPrice, isArchived } = req.body;
        
        let filter = {}
        if(category)
        {
            filter.category = category;
            filter.isArchived = isArchived;
        }
        if(minPrice >= 0 && maxPrice >= minPrice)
        {
            filter['$and'] = [
                {
                    price: {
                        $gte: minPrice
                    }
                },
                {
                    price: {
                        $lte: maxPrice
                    }
                }
            ]
        }

        let products = await ProductMongoModel.find(filter);
        if(!products) return response.errorResponse(404, 'NOT_FOUND');

        return response.successResponse(null, products);
    },

    updateProduct: async (req) =>
    {
        const productDetails = req.body;

        let updatedProduct = await ProductMongoModel.updateOne({
            _id: productDetails.productId
        },
        {
            $set: {
                ...productDetails
            }
        });
        if(updatedProduct.nModified != 1) return response.errorResponse(500, 'INTERNAL_SERVER_ERROR');

        return response.successResponse('Product Updated.')
    }
};

