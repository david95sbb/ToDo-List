const winston = require('winston');
const fs = require('fs');
const path = require('path');

const dirfiles = path.join(__dirname, '.logs/');

if (!fs.existsSync(dirfiles)) {
  fs.mkdirSync(dirfiles);
}

const filename = path.join(dirfiles, 'created-logfile.log');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename })
  ]
});

module.exports = logger;
