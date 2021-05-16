let express = require('express');
let router = express.Router();
const catalogService = require('../services/catalog')
const jwt = require('../services/middleware/jwt/jwt')

/* GET home page. */
router.use(jwt.authenticate);
router.post('/create', async (req, res) => {
  let catalog = await catalogService.createCatalog(req)
  res.status(200).json(catalog)
});

router.get('/master', async (req, res) => {
  let catalog = await catalogService.getMasterInventory(req)
  res.status(200).json(catalog)
});

module.exports = router;
