var express = require('express')

var app = express();

app.use(express.static(__dirname))

app.get('/', function(req,res){
	res.render('index')
})

app.listen(8081, function(){
	console.log('listening on port 3000...')
})


