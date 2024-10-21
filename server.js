const express = require('express');
const dotenv = require('dotenv');
const clientRouter = require('./src/routes/clientRouter');

require('./src/config/database')

dotenv.config();

const app = express();
app.use(express.json());

app.use('/client', clientRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});