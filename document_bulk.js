var client = require('./connection.js');
var inputfile = require("./extra.json");
var bulk = [];

var makebulk = function(movielist,callback){
  for (var current in movielist){
    bulk.push(
      { index: {_index: 'movies', _id: movielist[current].id } },
      {
        'id': movielist[current].id,
        'title': movielist[current].title,
        'year': movielist[current].year,
        'genres': movielist[current].genres,
        'storyline': movielist[current].storyline,
        'actors': movielist[current].actors
      }
    );
  }
  callback(bulk);
}

var indexall = function(madebulk,callback) {
  client.bulk({
    maxRetries: 5,
    index: 'movies',
    body: madebulk
  },function(err,resp,status) {
      if (err) {
        console.log(err);
      }
      else {
        callback(resp.items);
      }
  })
}

makebulk(inputfile,function(response){
  console.log("Bulk content prepared");
  indexall(response,function(response){
    console.log(response);
  })
});