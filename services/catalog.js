const { CatalogMongoModel, UserMongoModel, ProductMongoModel, ActivityMongoModel } = require('../models/index');
const response = require('../constants/responseConstants')
const { v4: uuidv4 } = require('uuid');
const Promise = require('bluebird')
const _ = require('lodash');
    
module.exports = {

    createCatalog: async (req, res) => {
        let catalogDetails = req.body;

        if(!catalogDetails) return response.errorResponse(400, 'Bad Request')

        let catalog = await CatalogMongoModel.create(catalogDetails)
        if(!catalog) return response.errorResponse(500, 'Internal server Error');

        return response.successResponse(catalog);
    },

    getMasterInventory: async (req) => {
        
        let aggregateFilter = [
        {
            $group: {
                _id: '$warehouseId',
                totalAvailable: { $sum: "$stocks.availableProducts" },
                totalDamaged: { $sum: "$stocks.damagedProducts" },
                totalReserved: { $sum: "$stocks.reservedProducts" }
            }
        },
        {
            $addFields: {
                totalStocks: { $sum: ["$totalAvailable", "$totalDamaged", "$totalReserved"] }
            }
        },
        {
            '$lookup': {
                from: 'warehouses',
                localField: '_id',
                foreignField: '_id',
                as: 'warehouseInfo'
            }
        }]

        if(req.query && req.query.productId){
            aggregateFilter.unshift({
                $match: {
                    productId: APP.ObjectId(req.query.productId)
                }
            })
        }
        console.log(aggregateFilter)
        let masterInventory = await CatalogMongoModel.aggregate(aggregateFilter);
        if(!masterInventory) return response.errorResponse(404, 'NOT_FOUND')

        return response.successResponse(null, masterInventory)
    }
    
    
};