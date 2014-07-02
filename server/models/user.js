var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , bcrypt = require('bcrypt-nodejs');
    //, passportLocalMongoose = require('passport-local-mongoose')
    ;

var userSchema = new Schema({
    email: { type:String, trim: true, unique: true },
    password : String
});

userSchema.path('email').required('true', 'email is required');
userSchema.path('password').required('true', 'password is required');

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

userSchema.statics = {

    load: function(id, callback) {
        this.findOne({_id: id})
            .exec(callback);
    },

    loadByEmail: function(email, callback) {
    	this.findOne({email: email})
            .exec(callback);
    },

    list: function(options, callback) {
        var criteria = options.criteria;
        this.find(criteria)
            .exec(callback);
    }

};

mongoose.model('User', userSchema);