const { WarehouseMongoModel, UserMongoModel, ProductMongoModel, ActivityMongoModel } = require('../models/index');
const response = require('../constants/responseConstants')
const { v4: uuidv4 } = require('uuid');
const Promise = require('bluebird')
const _ = require('lodash');
    
module.exports = {

    createWarehouse: async (req, res) => {
        let warehouseDetails = req.body;

        if(!warehouseDetails) return response.errorResponse(400, 'Bad Request')

        let warehouse = await WarehouseMongoModel.create(warehouseDetails)
        if(!warehouse) return response.errorResponse(500, 'Internal server Error');

        return response.successResponse(warehouse);
    }
    
};