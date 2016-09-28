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
    username: 'sadsheeepbot',
    password: 'oauth:akvqj9fwwsmtep9ihaopdr32nobl0a'
  },
  channels: ['king_o_town']
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self) {
  // client.action('king_o_town', user['display-name'] + " don't say that");
  if(message === '!sadsheeepbot') {
    client.action('king_o_town', "Hello")
  }
});

// client.on('connected', function(address, port) {
//   client.action("king_o_town", "King o Town is a noob");
// });
