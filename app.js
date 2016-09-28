var tmi = require('tmi.js');

var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: 'aws',
    reconnect: true
  },
  identity: {
    username: 'sadsheepbot',
    password: 'oauth:hf4fj1jogm6eoctnr7am55hjmm746n'
  },
  channels: ['sadsheeep']
};

var client = new tmi.clent(options)
client.connect();
