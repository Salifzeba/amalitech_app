let User = require('../model/users');
let Food = require('../model/foods');

exports.getDashboard = (req, res, next)=>{
    let foods = Food.find();
    User.find()
    .then(users=>{
        res.render('admin/dashboard', {title:'dashboard', users:users, foods:foods});
    }).catch(error=>{
        console.log(error);
    })
    
   }

exports.postUser = (req, res, next)=>{
    let user = new User(req.body);
    console.log(user);
    user.save()
    .then(()=>{
     console.log('Your data has been save wait for admin approval');
     res.redirect('/admin/dashboard');
 })
 .catch(err=> console.log(err));
}

exports.getSingleUser =(req, res, next)=>{
    let id =req.params.id;
    User.findById(id).then((result)=>{
        res.render('admin/dashboard',{user:result})
    }).catch(err=>console.log(err));
}

exports.updateUser =(req, res, next)=>{
    let id =req.params.id;
    User.findByIdAndUpdate(id).then((result)=>{
        res.json({
            redirect:'/admin/dashboard',
            msg:'Successfully deleted'
        });
    }).catch(err=>console.log(err));
}

exports.getDeleteUser =(req, res, next)=>{
    let id =req.params.id;
    User.findByIdAndDelete(id).then((result)=>{
        res.json({
            redirect:'/admin/dashboard',
            msg:'Successfully deleted'
        });
    }).catch(err=>console.log(err));
}

exports.addFood =(req, res, next)=>{
    let food = new Food(req.body);
    console.log(food)
    food.save().then(()=>{
        console.log('Food added Successfully')
        res.redirect('/admin/dashboard');
    })
    .catch(error=> console.log(error));
}