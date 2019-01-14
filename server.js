const express = require('express');
const next = require('next');
const compression = require('compression');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const logger = require('./winstonrc');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);
const port = parseInt(process.env.PORT, 10) || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(
      compression({
        threshold: 0
      })
    );

    server.get('/sw.js', (req, res) =>
      app.serveStatic(req, res, path.resolve('./.next/sw.js'))
    );

    server.get('/manifest.html', (req, res) =>
      app.serveStatic(req, res, path.resolve('./.next/manifest.html'))
    );

    server.get('/manifest.appcache', (req, res) =>
      app.serveStatic(req, res, path.resolve('./.next/manifest.appcache'))
    );

    server.use(handler).listen(port, err => {
      if (err) throw err;
      logger.log('info', `Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    logger.log('error', ex.stack);
    process.exit(1);
  });
