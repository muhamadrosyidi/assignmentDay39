const express = require('express');
const mathChecked = require('./fungsi dan test/fungsi/math.js')


const app = express();

app.use(express.json());

app.get('/is-weekend', mathChecked.checkisWeekend);
app.get('/is-leap-year', mathChecked.checkisLeapYear);

module.exports = app;