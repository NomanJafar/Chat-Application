const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');
const app = express();

connectToMongo();

const port = 5000;

app.use(express.json());
app.use(cors());


app.use('/api/',require('./routes/route'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));