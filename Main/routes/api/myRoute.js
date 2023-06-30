const router = require('express').Router();
const{
    getUsers,
    getMy,
    createUser,
    createMy,
    deleteUsers,
    deleteMy
} = require('../../controllers/myController');

router.route('/').get(getUsers).post(createUser).delete(deleteUsers);

router
    .route('/my')
    .get(getMy)
    .post(createMy)
    .delete(deleteMy);

    module.exports = router;