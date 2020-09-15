var express = require('express');
var router = express.Router();
const {ensureAuthenticated} = require('../config/auth') 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', (req,res)=>{
    res.render('register');
})

router.get('/dashboard',ensureAuthenticated,(req,res)=>{
    res.render('dashboard',{
        user: req.user
    });
})

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Express' });
});


router.get('/babavida', function(req, res, next) {
  res.render('blog', 
  	{ 
  		title: 'babavida' 
  	}
  	);
});




router.get('/author', function(req, res, next) {
  res.render('blog', 
  	{ 
  		title: 'babavida' 
  	}
  	);
});




module.exports = router;
