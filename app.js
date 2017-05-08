const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const pg = require('./db/knex')
const linkQuery = require('./db/recent_matches')




app.get('/', (req, res) => {

var matchData = []
  linkQuery.getMatches().then(matches => {
          matchData = matches
          return linkQuery.getNames()
      }).then(names =>{
          // console.log(matchData);
          // console.log(names);
          var data = allData(matchData, names)
          //console.log(data);
          res.render('index', {
              data
          })
        })

})

function allData(match, names){
  var players = []
  var games = []

  //for each player
  for (var p = 0; p < names.length; p++) {
    players[p] = {
      id: names[p].id,
      name: names[p].first_name,
      total: 0,
      wins: 0,
      loses: 0
    }
    //for each match
    for (var m = 0; m < match.length; m++) {
      if(players[p].id === match[m].winner_id){
        players[p].total += 1
        players[p].wins += 1
      }
      if(players[p].id === match[m].loser_id){
        players[p].total += 1
        players[p].loses += 1
      }
      console.log(players[match[m].winner_id -1].name);
      console.log(players[match[m].loser_id -1].name);
      let tempWinner = players[match[m].winner_id -1].name
      let tempLoser = players[match[m].loser_id -1].name

      games[m] = {
        winner: tempWinner,
        loser: tempLoser,
        date: match[m].date
      }

    }
  }

  let returnArr = []
  returnArr[0] = games
  returnArr[1] = players
  console.log(returnArr);
  return returnArr

}

app.use('/', express.static('public'))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())



app.listen(port, function() {
    console.log('Listening on local host ' + port)
})
