const express = require('express')
const newsController = require('../app/controllers/NewsController')

const router = express.Router()

router.get('/create', newsController.create )
router.post('/store', newsController.store )
router.get('/:slug/edit', newsController.edit )
router.delete('/:slug', newsController.delete)
router.put('/:slug', newsController.update)
router.get('/:slug', newsController.show )
router.use('/', newsController.news )

module.exports = router;