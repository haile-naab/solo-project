const mongooose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongooose.Schema({
    username:{
        type:String,
        require: [true, 'Username field is required!']
    },

    // lastname:{
    //     type:String,
    //     require: [true, 'lastname field is required!']
    // },

    emailaddress:{
        type:String,
        require: [true, 'email field is required!']
    },

    password:{
        type:String,
        require: [true, 'password field is required!'],
        minlength:[8, "password must be at least characters!" ]
    }
}, {timestamp: true});

UserSchema.virtual('confirmPassword ')
    .get(()=> this._confirmPassword)
    .set((value)=> this._confirmPassword= value);

    UserSchema.pre("validate", function(next){
        if(this.password !== this.confirmPassword){
            this.invalidate('confirmPassword', 'password must match!');
        }
        next();
    });

    UserSchema.pre("save", function(next){
        bcrypt.hash(this.password, 10)
        .then((hashedPw)=> {
            this.password= hashedPw;
            next();
        })
    })
 const User = mongooose.model('User', UserSchema);
 module.exports = User