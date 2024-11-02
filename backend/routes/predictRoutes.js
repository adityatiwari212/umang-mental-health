const express = require('express');
const { predictAnxiety, predictPtsd, predictDepression, predictBipolar } = require('../controllers/predictController');

const router = express.Router();

router.route("/anxiety").post(predictAnxiety);
router.route("/ptsd").post(predictPtsd);
router.route("/depression").post(predictDepression);
router.route("/bipolar").post(predictBipolar);

module.exports = router