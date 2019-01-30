/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.getForecast = (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  const https = require('https');
  const URL = `https://api.darksky.net/forecast/49992c2390795d3b87fbddfa0be57bcb/${
    req.query.latitude
  },${req.query.longitude}?lang=ja&units=si`;

  https
    .get(URL, (getRes) => {
      let body = '';
      getRes.setEncoding('utf8');
      getRes.on('data', (chunk) => {
        body += chunk;
      });
      getRes.on('end', () => {
        const responseJson = JSON.parse(body);
        res.status(200).send(responseJson);
      });
    })
    .on('error', (e) => {
      console.error(e);
      res.status(500).send(e);
    });
};
