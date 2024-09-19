/*
    Routes encyclopedia / info
    host + /info

*/
const { Router } = require('express');
const router = Router();

const {getFront} = require('../controllers/data');

router.post(
    '/',
    [],
    getFront
);


module.exports = router;
