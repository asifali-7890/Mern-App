const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const User = require('./models/userModel');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
const route = require('./routes/userRoute');

// app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });  

mongoose.connect(process.env.URI).then(() => {
    console.log('Successfully connected...');
    app.listen(5000, (error) => {
        if (error) console.log(error);
        console.log('Successfully connected at ...', process.env.PORT);
    });
}).catch((error) => {
    console.log('Error', error);
});
app.use(route);

