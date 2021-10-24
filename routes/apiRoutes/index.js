const router = require('express').Router();
const animalRoutes = require('./animalRoutes.js');

router.use(require('./zookeeperRoutes.js'))
router.use(animalRoutes);

module.exports = router;