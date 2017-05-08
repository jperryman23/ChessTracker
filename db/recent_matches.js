const pg = require('./knex')

function getMatches() {
  return pg('chess').select('winner_id','loser_id','date').from('matches')
}

function getHistory(){
  return pg('chess').select('first_name', 'last_name').from('players')
}


module.exports = {
  getMatches,
  getHistory

}