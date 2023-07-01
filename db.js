const sqlite3 = require('sqlite3').verbose();

const DB_PATH = 'terminal-data.db';
const db = new sqlite3.Database(DB_PATH);

db.serialize(() => {
  db.run(
    `
    CREATE TABLE IF NOT EXISTS terminal_data (
      id INTEGER PRIMARY KEY,
      content TEXT
    );
  `
  );
});

module.exports = { db };
