const router = require('express').Router();
const{
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).post(createUser);

router.route('/:userId').delete(deleteUser).put(createUser);



module.exports = router;
