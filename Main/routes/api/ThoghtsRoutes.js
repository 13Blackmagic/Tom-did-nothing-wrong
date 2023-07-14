const router = require('express').Router();
const{
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/ThoughtsController');

router.route('/').get(getThought).post(createThought);

router
    .route('/:thoughtId')
    .get(getSingleThought)
    .post(updateThought)
    .delete(deleteThought);

    module.exports = router;