var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var people = [
  {
    name:"James",
    age:20,
  },
  {
    name:"Sara",
    age:30,
  },
  {
    name:"Bob",
    age:41,
  }
]

//View Engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// Set Static Path
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res)=>{ 
  res.render("index", {
    people: people
  });
}
);

app.listen(3000, ()=>{console.log('Server Started on Port 3000...')});