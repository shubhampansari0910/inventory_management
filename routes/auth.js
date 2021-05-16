let express = require('express');
let router = express.Router();
const authService = require('../services/auth');
const jwt = require('../services/middleware/jwt/jwt');

/* GET home page. */
router.post('/register', async (req, res) => {
    let auth = await authService.register(req)
    res.status(200).json(auth)
  });
  
router.post('/login', async (req, res) => {
    let login = await authService.login(req)
    res.status(200).json(login)
  });

router.post('/verify', async (req, res) => {
    let data = await authService.verifyUser(req)
    res.status(200).json(data)
  });
  
  module.exports = router;