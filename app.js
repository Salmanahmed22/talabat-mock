const express = require('express');
const app = express();
const config = require('./config/config');
const connectDB = require('./config/db');

app.use(express.json());

// connect to db
connectDB();

const port = config.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

app.get('/', (req, res) => {
    res.send('hello world')
})