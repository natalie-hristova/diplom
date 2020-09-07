var express = require('express');
var restful = require('node-restful');
var mongoose = restful.mongoose;
var port = 3033;

var app = express();


mongoose.connect('mongodb://127.0.0.1/destino')


var CatsSchema = mongoose.Schema({
    name: String,
    sku: String, 
    price: Number
});

var Cats = restful.model('cats', CatsSchema);
Cats.methods(['get', 'put', 'post', 'delete']);
Cats.register(app, '/cats');

    

//Routing

app.get('/', (req, res) => {
  res.send('Meow World!')
})


app.get('/nati', (req, res) => {
    res.send('Meow Nati!')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})