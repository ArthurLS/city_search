const sqlite3 = require('sqlite3');
const cities = require('./codes-postaux.json');

const dbname = 'main.db'

// openDB
let db = new sqlite3.Database(dbname, err => {
  if (err) throw err;
  console.log('ok');
});

// create table
db.run('CREATE TABLE IF NOT EXISTS cities(codePostal varchar(10), codeCommune varchar(10), nomCommune varchar(255), libelleAcheminement varchar(255))');

let sql = 'INSERT INTO cities(codePostal, codeCommune, nomCommune, libelleAcheminement) VALUES (?, ?, ?, ?)';

async function initDB() {
  for (let i = 0; i < cities.length - 1; i++) {
    await db.run(sql, [cities[i].codePostal, cities[i].codeCommune, cities[i].nomCommune, cities[i].libelleAcheminement], function(err) {
      if (err) {
        return console.log(err.message);
      }
      // get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}. Index ${i}`);
    });
  }
};

initDB();

