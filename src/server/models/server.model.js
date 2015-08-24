var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// pre Sub-Document , Storing variation betwwen two consecutive points.
var Signature = {
	deltaX: [Number],
	deltaY: [Number]
};
// Normailzation parameters， keep them in permanent storage so that avoid recalculateing when do verification.
var NormalizeBase = {
		distanceAverageMin: Number,
		distanceAverageMax: Number,
		distanceAverage_AverageMin: Number,
		RefTemplateIndex: Number

	}
// This Schema store user information, for now, include username, email and a set of signature. 
var UserSchema = new Schema({
	Username: String,
	Email: String,
	//CreatedTime: Date,
	NormalizeBase: NormalizeBase,
	SigSet: [Signature]
});


var UserSigs = mongoose.model('User', UserSchema);


//export model
module.exports = {
	UserSigs: UserSigs
}