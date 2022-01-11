var express = require('express');
var router = express.Router();
var session=require('express-session')
 /* GET users listing. */
 
 var userLogin={
  name:'Arunabh',
  email:'arunabh1995@gmail.com',
  password:'12'
  }
 
router.get('/', function(req, res, next) {
  var products=[
    {
    name:'Robo splash',
    category:'Robo toy',
    price:'500 Rs.',
    image:'https://images.unsplash.com/photo-1601255596523-1ded45951ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      name:'Bablu',
      category:'Baloon toy',
      price:'300 Rs.',
      image:'https://images.unsplash.com/photo-1623939012322-f19aa1539760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      name:'Chikken flyer',
      category:'Robo toy',
      price:'650 Rs.',
      image:'https://images.unsplash.com/photo-1517242810446-cc8951b2be40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      name:'Robo car',
      category:'Robo toy',
      price:'750 Rs.',
      image:'https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
      name:'Building blocks',
      category:'Block toy',
      price:'400 Rs.',
      image:'https://images.unsplash.com/photo-1541692641319-981cc79ee10a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      name:'Robo denver',
      category:'Robo toy',
      price:'900 Rs.',
      image:'https://images.unsplash.com/photo-1598541264502-84dc6aa2fb87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
    },
    {
      name:'Robo rio',
      category:'Robo toy',
      price:'600 Rs.',
      image:'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=510&q=80',
    },
    {
      name:'Minoion 1',
      category:'Minions toy',
      price:'750 Rs.',
      image:'https://images.unsplash.com/photo-1567722066597-2bdf36d13481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
      name:'Batman Duck',
      category:'Water toy',
      price:'300 Rs.',
      image:'https://images.unsplash.com/photo-1559715541-5daf8a0296d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
    },
    {
      name:'Minion 2',
      category:'Minion toy',
      price:'750 Rs.',
      image:'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
      name:'Spiderman',
      category:'Superhero toy',
      price:'1000 Rs.',
      image:'https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80',
    },
    {
      name:'Hulk',
      category:'Superhero toy',
      price:'1000 Rs.',
      image:'https://images.unsplash.com/photo-1608272841063-67f50df421c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      name:'Groot',
      category:'Superhero toy',
      price:'1000 Rs.',
      image:'https://images.unsplash.com/photo-1592513002316-e4fa19175023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
    },
    {
      name:'Rabit doll',
      category:'Doll toy',
      price:'700 Rs.',
      image:'https://images.unsplash.com/photo-1615486363973-f79d875780cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
    },
    {
      name:'Cat doll',
      category:'Doll toy',
      price:'700 Rs.',
      image:'https://images.unsplash.com/photo-1615486364134-62a4c72c822d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      name:'Avacado doll',
      category:'Doll toy',
      price:'700 Rs.',
      image:'https://images.unsplash.com/photo-1554825203-68321ddde262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80',
    },
    {
      name:'Rabit',
      category:'Doll toy',
      price:'700 Rs.',
      image:'https://images.unsplash.com/photo-1567169866456-a0759b6bb0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    },
    {
      name:'Teddy bear',
      category:'Doll toy',
      price:'700 Rs.',
      image:'https://images.unsplash.com/photo-1615486363990-dff6c0722a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      name:'Blocks',
      category:'Block toy',
      price:'500 Rs.',
      image:'https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      name:'Squid game suit',
      category:'Suit toy',
      price:'1200 Rs.',
      image:'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      name:'Squid game toy',
      category:'Character toy',
      price:'1200 Rs.',
      image:'https://images.unsplash.com/photo-1635003913011-95971abba560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80',
    },
    {
      name:'Squid game suit',
      category:'Suit toy',
      price:'1200 Rs.',
      image:'https://images.unsplash.com/photo-1634157663445-42ffca53c60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      name:'Superman',
      category:'Superhero toy',
      price:'1000 Rs.',
      image:'https://images.unsplash.com/photo-1558679908-541bcf1249ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      name:'Spiderman',
      category:'Superhero toy',
      price:'1000 Rs.',
      image:'https://images.unsplash.com/photo-1584994696678-3d739b5ac1bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    },
    {
      name:'Car',
      category:'Vehicle toy',
      price:'1500 Rs.',
      image:'https://images.unsplash.com/photo-1508896694512-1eade558679c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      name:'Car',
      category:'Vehicle toy',
      price:'1500 Rs.',
      image:'https://images.unsplash.com/photo-1534732806146-b3bf32171b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      name:'Car',
      category:'Vehicle toy',
      price:'1500 Rs.',
      image:'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
      name:'Car',
      category:'Vehicle toy',
      price:'1500 Rs.',
      image:'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    ]
    if(req.session.login){
      res.render('admin/view-products',{admin:true,products,userLogin})

    
    }else{
    console.log('api call');
      res.render('user/login')
    }
    
  console.log('afafa');
});
router.get('/add-product',function(req,res){
res.render('admin/add-product')

})
router.post('/add-product',(req,res)=>{
console.log(req.body);
console.log(req.file.image);
})
router.get('/home',(req,res)=>{
  console.log(' admin api call');
    res.redirect('/index')
    })
    
    
  
module.exports = router;
