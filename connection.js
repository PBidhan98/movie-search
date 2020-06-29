var elasticsearch = require('elasticsearch');

// var client = new elasticsearch.Client( {  
//   hosts: [
//      'https://[username]:[password]@[server]:[port]/',
//      'https://[username]:[password]@[server]:[port]/'
//   ]
// });

//creates a connection to our local elastic search
const client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
  });

module.exports = client;