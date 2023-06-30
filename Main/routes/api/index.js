const router = require("express").Router();
const myController = require("../../controllers/myController");
const userController = require("../../controllers/userController");

router.use('/my', myController);
router.use('/user', userController);

module.exports = router;