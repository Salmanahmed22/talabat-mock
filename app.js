const express = require('express');
const app = express();
const config = require('./config/config');
const connectDB = require('./config/db');
const custormersRouter = require('./routers/customerRouter');
const restaurantRouter = require('./routers/restaurantRouter');
const driverRouter = require('./routers/driverRouter');
app.use(express.json());

//TODO: handle async errors
connectDB();

app.use('/customer', custormersRouter)
app.use('/restaurant', restaurantRouter)
app.use('/driver', driverRouter)

const port = config.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

app.get('/', (req, res) => {
    res.send('hello world')
})