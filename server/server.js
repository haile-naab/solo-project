require('dotenv').config();
const express = require('express');
const cookieParser= require('cookie-parser');
const cors= require('cors');

const app = express();
const port= process.env.Db_Port


//require('./config/mongoose.config')(process.env.Db_Name);



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

app.use(cookieParser());


require('./config/mongoose.config');

// setup the route

require('./routes/rent.route')(app);
require('./routes/user.route')(app);

app.listen(port, () => {

    console.log("Listening at " + port )
})
