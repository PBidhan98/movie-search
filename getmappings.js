var client = require('./connection.js');

client.indices.getMapping({  
    index: 'movies'
  },
function (error,response) {  
    if (error){
      console.log(error.message);
    }
    else {
      console.log("Mappings:\n",response.movies.mappings.properties);
    }
});