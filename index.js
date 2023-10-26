const express = require('express');
const database = require('./db/database')
const app = express();
const port = process.env.PORT || 4200;
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')

app.use(express.static('dist/eshopping/'));
app.use(express.json())
app.use('/userApi',userRouter)
app.use('/productApi',productRouter)
app.get('/*', (req, res) =>
    res.send('<h1>hello here big!!</h1>')
);

// Start the app by listening on the default Heroku port
app.listen(port,()=>{console.log(`app listen on port : ${port}`)});

