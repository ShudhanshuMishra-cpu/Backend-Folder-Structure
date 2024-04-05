const express = require('express');
const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');
const { route } = require('./routes/routes');

app.use(cors());
app.use(bodyParser.json());

app.use(route);
app.listen(4000);

