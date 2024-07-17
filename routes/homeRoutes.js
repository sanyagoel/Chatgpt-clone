const express = require('express');
const router = express.Router();
const {getPage} = require('../controllers/clone');

router.get('/',getPage);

module.exports = router;