const pg = require('./knex')

function getMatches() {
  return pg('chess').select().from('matches')
}

function getNames(){
    return pg('chess').select().from('players')
}


module.exports = {
  getMatches,
  getNames

}
