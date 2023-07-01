const express = require('express');
const { Wetty } = require('wetty');
const { db } = require('./db');

const app = express();

const wetty = new Wetty({
  command: `echo "${process.env.SUDO_PASSWORD}" | sudo -S bash`,
  ondata: (data) => {
    db.run('INSERT INTO terminal_data(content) VALUES(?)', data);
  },
});

app.use(wetty.middleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
