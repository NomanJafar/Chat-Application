const express = require("express");
const router = express.Router();

router.post('/adduser', (req, res) => {
    console.log(req.body);
    res.send('server is up');

});

module.exports = router;