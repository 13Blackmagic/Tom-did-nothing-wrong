const router = require("express").Router();
const myController = require("./Thoughtsroutes");
const userController = require("./userRoutes");

router.use('/thoughts', myController);
router.use('/user', userController);

module.exports = router;