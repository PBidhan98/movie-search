var client = require('./connection.js');

client.index({  
  index: 'movies',
  id: '1',
  body: {
      "title": "Grottmannen Dug",
      "year": "2018",
      "genres": [
          "Animation",
          "Adventure",
          "Comedy"
        ],
      "storyline": "Set at the dawn of time, when prehistoric creatures and woolly mammoths roamed the earth, Early Man tells the story of Dug, along with sidekick Hognob as they unite his tribe against a mighty enemy Lord Nooth and his Bronze Age City to save their home.",
      "actors": [
          {"first_name": "Tom", "last_name":"Hiddleston"}, 
          {"first_name": "Eddie", "last_name":"Redmayne"}, 
          {"first_name": "Maisie", "last_name":"Williams"}
        ]
  }
},function(err,resp,status) {
    console.log(resp);
});
