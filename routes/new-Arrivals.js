var express = require('express');
var router = express.Router();
var session=require('express-session')
var userLogin={
  name:'Arunabh',
  email:'arunabh1995@gmail.com',
  password:'12'
  }

var newArrivals=[
    {
        name:'Mini Bus',
        category:'Vehicle toy',
        price:'1500 Rs.',
        image:'https://images.unsplash.com/photo-1594787826350-19386fdb2363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        name:'Truck',
        category:'Vehicle toy',
        price:'1500 Rs.',
        image:'https://images.unsplash.com/photo-1601361739230-d43db9888827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1038&q=80',
      },
      {
        name:'Truck',
        category:'Vehicle toy',
        price:'1500 Rs.',
        image:'https://images.unsplash.com/photo-1597336343067-681ecc23a453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        name:'Auto',
        category:'Vehicle toy',
        price:'1500 Rs.',
        image:'https://images.unsplash.com/photo-1602670574530-b23667bafa85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        name:'Hummer',
        category:'Vehicle toy',
        price:'1500 Rs.',
        image:'https://images.unsplash.com/photo-1602912526679-59e34e95e3ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
      },
      {
        name:'Taxi car',
        category:'Vehicle toy',
        price:'1500 Rs.',
        image:'https://images.unsplash.com/photo-1536846511313-4b07b637bff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        name:'Bus',
        category:'Vehicle toy',
        price:'1500 Rs.',
        image:'https://images.unsplash.com/photo-1632435285572-4fdea52e4e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        name:'Bus',
        category:'Vehicle toy',
        price:'1500 Rs.',
        image:'https://images.unsplash.com/photo-1632435285709-a1ee2a8effcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
]

router.get('/newArrivals', function(req, res, next) {
if(req.session.login){
  res.render('user/arrival',{user:true,newArrivals,userLogin})

}else{
console.log('api call');
  res.render('user/login')
}
});
module.exports=router;