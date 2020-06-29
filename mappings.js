var client = require('./connection.js');

client.indices.putMapping({  
  index: 'movies',
  body: {
    properties: {
      'year': {
        'type': 'date', // type is a required attribute if index is specified
        'format': 'year'
      },
      'actors': {
          'type': 'nested'
      }
    }
  }
},function(err,resp,status){
    if (err) {
      console.log(err);
    }
    else {
      console.log(resp);
    }
});