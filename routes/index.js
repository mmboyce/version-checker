const express = require('express');
const { compareVersions } = require('../service/compareVersions');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send({
    endpoints: {
      compareVersions: '/compareVersions/',
    },
  });
});

router.get('/compareVersions', (req, res) => {
  res.send({
    params: '/:versionNumber/:compareToThisVersionNumber',
  });
});

router.get('/compareVersions/:versionOne/:versionTwo', (req, res) => {
  const { versionOne, versionTwo } = req.params;

  try {
    compareVersions(versionOne, versionTwo);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }

  res.send(
    {
      result:
        compareVersions(versionOne, versionTwo),
    },
  );
});

module.exports = router;
