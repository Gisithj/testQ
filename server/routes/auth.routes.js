const isLoggedIn = function(req, res, next) {
    if (req.user) {
        next();
    // }else if(req.business){
    //     next();
    }else {
        res.render('signin');
    }
  }

  
  module.exports = {isLoggedIn}

