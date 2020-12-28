const express = require('express');
const path = require('path');
 const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const port = 3000;

const url ='mongodb+srv://sumaila:Littleman@50@cluster0.bg5k4.mongodb.net/amalitechFoodApp?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true,})
.then(()=>{
    console.log('Connected');
    app.listen(3001,()=>{
        console.log(`listing on 3001`)
    });
})
.catch(err =>{
    console.log(err);
});


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))

const frontViews = require('./routes/front-view');
const adminViews = require('./routes/admin');
app.use(frontViews);
app.use('/admin', adminViews);




