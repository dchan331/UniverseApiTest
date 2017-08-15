const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const api = require('./routes/routes');
const axios = require('axios')

const appid = process.env.APP_ID;
const secret = process.env.SECRET_UNIVERSE;
const authCd = process.env.AUTH_CODE;
const redirect = process.env.REDIRECT;
console.log(appid);
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (request, response) => {
//   response.sendFile(__dirname + '/public/index.html'); // For React/Redux
// });

app.get('/', (req, res) => {
  axios.get('https://www.universe.com/oauth/authorize',{
    params: {
      response_type:'code',
      client_id: appid,
      redirect_uri: redirect,
    }
  })
  .then((resp) => {
    res.send(resp.data)
  })
  .catch(err => {
    res.send('error')
  })

  // res.send('hello')
});

// app.use('/api', api);


app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});

module.exports = app;
