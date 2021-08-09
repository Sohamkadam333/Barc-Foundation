const router = require('express').Router();
const adminController = require('../controllers/admin-controller');
router.get('/', adminController.getHomePage);

router.post(
  '/insert-data',
  adminController.addUserToDatabase
);

router.post(
  '/insert-newsLetter',
  adminController.addUserToNewsLetter
);

module.exports = router;
