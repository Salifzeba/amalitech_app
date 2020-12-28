const bodyParser = require('body-parser')
const { check, validationResult, body } = require('express-validator')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const User = require('../model/users');
const Food = require('../model/foods');


exports.getIndex = (req, res, next)=>{
    Food.find().then((result)=>{
        res.render('index', {title:'home', foods:result});
    }).catch(err=>console.log(err))
    
   }

exports.getLogin = (req, res, next)=>{
    res.render('login', { 
        title:'Login'
       })
   }

   exports.getRegister = (req, res, next)=>{
    res.render('register', {
        title:'Register'
       })
   }

   exports.postUser =(req, res, next)=>{
         const errors = validationResult(req)
        console.log(req.body.name);
       if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
       }
    
       let user = new User(req.body);
       console.log(user);
       user.save()
       .then(()=>{
        console.log('Your data has been save wait for admin approval');
        res.redirect('/');
    })
    .catch(err=> console.log(err));
    next();
   }