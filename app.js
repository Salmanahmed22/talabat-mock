const express = require('express');
const app = express();
const config = require('./config/config');
const connectDB = require('./config/db');
const custormersRouter = require('./routers/customerRouter');
app.use(express.json());

//TODO: handle async errors
connectDB();

app.use('/customer', custormersRouter)

const port = config.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

app.get('/', (req, res) => {
    res.send('hello world')
})