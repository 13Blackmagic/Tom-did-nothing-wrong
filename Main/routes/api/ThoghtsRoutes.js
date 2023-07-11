const router = require('express').Router();
const{
    getThoughts,
    getSingleThought,
    createThoughts,
    updateThought,
    deleteThought,
} = require('../../controllers/ThoughtsController');

router.route('/').get(getThoughts).post(createThoughts);

router
    .route('/:thoughtId')
    .get(getSingleThought)
    .post(updateThought)
    .delete(deleteThought);

    module.exports = router;