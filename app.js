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
  }

  //for each player/each match
  for (var q = 0; q < names.length; q++) {
    for (var m = 0; m < match.length; m++) {
      if(players[q]['id'] == match[m]['winner_id']){
        players[q].total += 1
        players[q].wins += 1
      }
      if(players[q].id === match[m].loser_id){
        players[q].total += 1
        players[q].loses += 1
      }

      let winnerID = match[m].winner_id -1
      let LoserID = match[m].loser_id -1
      games[m] = {
        winner: players[winnerID]["name"],
        loser: players[LoserID]["name"],
        date: match[m].date
      }

    }
  }
  let returnObj = {
    games: games,
    players: players
  }

  return returnObj


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
