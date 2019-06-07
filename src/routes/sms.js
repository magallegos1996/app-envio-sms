const express = require('express');
const router = express.Router();
const smsController = require('../controllers/sms.controller');

router.post('/sms/enviarMensaje', smsController.enviarMensaje);

module.exports = router;