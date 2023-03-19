const express = require('express')
require('dotenv').config();
const router=require('./routes')
const app = express();
const PORT = process.env.PORT || 5500;
const DBConnect = require('./database');
const cors = require('cors');
DBConnect();

const corsOption = {
    origin:['http://localhost:3000']
}
app.use(cors(corsOption))
app.use(express.json())
app.use(router)
app.get('/', (req, res) => {
    res.send('from server ')
})
app.listen(PORT,()=>{console.log(`Listening on ${PORT}`)})