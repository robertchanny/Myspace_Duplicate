var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
	firstName: {type:String,default:''},
	lastName: {type:String,default:''},
	email: {type:String,default:''},
	password: {type:String,default:''},
	timestamp: {type:Date,default:Date.now}
});

profileSchema.methods.summary = function(){
	var summary = {
		firstName:this.firstName,
		lastName:this.lastName,
		email:this.email,
		timestamp:this.timestamp
	}
	return summary;
}

module.exports = mongoose.model('profileSchema',profileSchema);