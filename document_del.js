var client = require('./connection.js');

client.delete({  
  index: 'movies',
  id: '1'
},function(err,resp,status) {
    console.log(resp);
});