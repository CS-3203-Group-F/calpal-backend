const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/docs", (req, res) => {
res.sendFile(path.join(__dirname, "../public", "docs.html"));
});

module.exports = router;
