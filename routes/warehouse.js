let express = require('express');
let router = express.Router();
const warehouseService = require('../services/warehouse');
const jwt = require('../services/middleware/jwt/jwt')

router.use(jwt.authenticate);
/* GET home page. */
router.post('/create', async (req, res, next) => {
  let players = await warehouseService.createWarehouse(req)
  res.status(200).json(players)
});

module.exports = router;
