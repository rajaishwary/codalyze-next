const { createServer } = require('http');
const express = require('express');
const path = require('path');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;
const compression = require('compression');
const PostMarkClient = require('./PostMarkClient');
const bodyParser = require('body-parser');

const mailSender = new PostMarkClient();

app.prepare().then(_ => {
  const app = express();
  app.use(compression());
  app.use(bodyParser.json());
  app.post('/send-request', (req, res) => {
    const subjectToCodalyze = `[codalyze-web] Someone sent a query on codalyze.com`;
    const htmlToCodalyze = `<br>Message<br><div>${JSON.stringify(req.body)}</div>`;
    const to = ['nverdhan@codalyze.com'];
    mailSender.sendMail({to, html: htmlToCodalyze, subject: subjectToCodalyze});
    res.json('ok');
  });
  app.use('/sw.js', express.static(path.join(__dirname, 'src/static/sw.js')));
  app.use(handle);
  createServer(app).listen(PORT, err => {
    if (err) throw err
    console.log(`> App running on port ${PORT}`);
  })
});
