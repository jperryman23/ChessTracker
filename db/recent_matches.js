const pg = require('./knex')

function getMatches() {
  return pg('chess').select('winner_id','loser_id','date').from('matches')
}



module.exports = {
  getMatches,


}
