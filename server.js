const express = require('express');
const dotenv = require('dotenv');

require('./src/config/database')

dotenv.config();

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Listening on port 3000');
});