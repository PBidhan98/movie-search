var client = require('./connection.js');

client.search({  
  index: 'movies',
  body: {
    _source: 'title',
    query: {
      nested:{
        path: 'actors',
        query: {
          bool: {
            must: [
              {
                match: {
                  "actors.first_name": "Zosia"
                }
              },
              {
                match: {
                  "actors.last_name": "Mamet"
                }
              }
            ]
          }
        }
      }
      // match: { "title": "The Boy Downstairs" }
    }
  }
},function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
      console.log("--- Response ---");
      console.log(response);
      console.log("--- Hits ---");
      response.hits.hits.forEach(function(hit){
        //console.log(hit);
        console.log(hit._source.title);
      })
    }
});