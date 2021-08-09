const router = require('express').Router();
const adminController = require('../controllers/admin-controller');

router.post(
  '/insert-newsLetter',
  adminController.addUserToNewsLetter
);

router.post(
  '/insert-data',
  adminController.addUserToDatabase
);

router.get('/', adminController.getHomePage);
module.exports = router;
