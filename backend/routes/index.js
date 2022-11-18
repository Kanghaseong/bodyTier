const express = require('express');
const path = require('path');
const router = express.Router();

const index = path.resolve(__dirname, '../public/index.html');

//브라우저에서 다른 URL 직접 접근 대비
router.get('*', (req, res) => {
    res.sendFile(index);
});

module.exports = router;
