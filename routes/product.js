let express = require('express');
let router = express.Router();
const productService = require('../services/product')


router.post('/create', async (req, res, next) => {
  let products = await productService.createProduct(req)
  res.status(200).json(products)
});

router.get('/get', async (req, res, next) => {
  let productId = req.query.productId
  let products = await productService.getProduct(productId)
  res.status(200).json(products)
});

router.post('/filter', async (req, res, next) => {
  let products = await productService.getProductsByFilter(req)
  res.status(200).json(products)
});
router.post('/update', async (req, res, next) => {
  let products = await productService.updateProduct(req)
  res.status(200).json(products)
});


module.exports = router;
