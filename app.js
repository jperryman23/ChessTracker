const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const pg = require('./db/knex')
const linkQuery = require('./db/recent_matches')


app.get('/', (req, res) => {


  linkQuery.getMatches()
        .then(data => {
            console.log(data);
          res.render('index', {
            data
          })
        })
})

app.use('/', express.static('public'))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.listen(port, function() {
    console.log('Listening on local host ' + port)
})
