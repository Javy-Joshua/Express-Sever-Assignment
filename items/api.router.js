const express = require("express");
const middleware = require('./api.middleware')
const controller = require('./api.controller')

const router = express.Router()

router.post('/', middleware.checkSize, controller.createItems)

router.get('/', controller.getItems)

router.get('/:id', controller.getOneItem)

router.patch('/:id', controller.updateItem)

router.delete('/:id', controller.deleteItem)


module.exports = router;