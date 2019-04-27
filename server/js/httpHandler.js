const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////
const randomCommand = () => {
  const commands = ['up', 'down', 'left', 'right'];
  let randomIndex = Math.floor(Math.random() * Math.floor(4));

  return commands[randomIndex];
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  if(req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(randomCommand());
    res.end();
  }
  
  if(req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  }
};
