const User = require('./../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    register: (req, res) => {
        const user = new User(req.body);

        user.save()
             .then(()=>{
                 res.json({message: " Successfully registered!", user: user})
             })
             .catch((err)=> {
                 res.status(400).json(err);
             });

    },
    login: (req, res)=>{
        User.findOne({email: req.body.email})
        .then((userRecord)=> {
            if(userRecord=== null){
                res.status(400).json({message: "invailed credentails!"})
            } else{
                bcrypt.compare(req.body.password, userRecord.password)
                .then((passwordMatches) => {
                    if(passwordMatches){
                        console.log("credinatial are valid!");
                    res.cookie("usertoken", jwt.sign({
                        _id: userRecord._id,
                        username: userRecord.username
                    }, process.env.JWT_SECRET), {
                        httpOnly: true,
                        expires: new Date(Date.now() + 900000000)
                    }).json({
                        message: "succesdfully loged In",
                        loggedUser:{
                            username: userRecord.username
                        }
                    })

                    } else{
                        res.status(400).json({message: "invailed credentails!"})
                    }
                    

                }) 
                .catch( err => {
                res.status(400).json({message: "invailed credentails!"})
            
        })
    }
  })

  },
  logout:(req, res) => {
      res.clearCookie('usetoken');
      res.json({message: "You have successfully logged out!"});
  }
}