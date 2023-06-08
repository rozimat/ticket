const { Router } = require('express');
const {speaker, speakerDelete, speagerGet} = require('../controller/speakers.controller');

const router = Router();


router.post('/api/admin/speakerposts', speaker);
router.delete('/api/admin/speakerposts/:id', speakerDelete);
router.get('/api/admin/speakerGet', speagerGet)



module.exports = router;