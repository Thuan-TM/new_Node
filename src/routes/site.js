const express = require('express')
const newsController = require('../app/controllers/SiteController')

const router = express.Router()

router.use('/search', newsController.search )
router.use('/', newsController.home )

module.exports = router;