const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
	res.sendStatus(200)
})

module.exports = router