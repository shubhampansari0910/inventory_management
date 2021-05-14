let express = require('express');
let router = express.Router();
const catalogService = require('../services/catalog')

/* GET home page. */
router.post('/create', async (req, res) => {
  let catalog = await catalogService.createCatalog(req)
  res.status(200).json(catalog)
});

router.get('/master', async (req, res) => {
  let catalog = await catalogService.getMasterInventory(req)
  res.status(200).json(catalog)
});

module.exports = router;
