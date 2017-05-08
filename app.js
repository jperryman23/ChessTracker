const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.render("index")
})


app.use('/', express.static('public'))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.listen(port, function() {
    console.log('Listening on local host ' + port)
})