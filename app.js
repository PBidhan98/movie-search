const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const ejs = require("ejs");
var client = require('./connection.js');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.render("home");
});

app.post('/search', function(req, res) {
  var {fname,lname} = req.body;
  console.log(fname);
  if(fname && lname){
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
                      "actors.first_name": fname
                    }
                  },
                  {
                    match: {
                      "actors.last_name": lname
                    }
                  }
                ]
              }
            }
          }
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
          res.render("result", {val:response.hits.hits});
        }
    });
  }
  
});

app.listen(process.env.PORT || 3000, function(req,res){
    console.log("server running successfully");
  });