var express       = require('express'),
    app           = express(),
    mongoose      = require('mongoose'),
    bodyParser    = require('body-parser');

mongoose.connect('mongodb://localhost:27017/danVanDuffelen_test')
app.use(bodyParser())
app.use(express.static(__dirname +'/app'))
app.use('/bower_components',express.static(__dirname + '/bower_components'))



app.listen(3000, function() {
  console.log("Server listening");
})
