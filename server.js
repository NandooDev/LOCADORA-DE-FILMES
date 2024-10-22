const express = require('express');
const dotenv = require('dotenv');
const clientRouter = require('./src/routes/clientRouter');
const movieRouter = require('./src/routes/movieRouter');
const rentalHistoryRouter = require('./src/routes/rentalHistoryRouter');

require('./src/config/database')

dotenv.config();

const app = express();
app.use(express.json());

app.use('/client', clientRouter);
app.use('/movie', movieRouter);
app.use('/rental-history', rentalHistoryRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});