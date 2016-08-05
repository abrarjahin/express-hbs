var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.findByUsername = function(userName, callback)
{
	User.findOne({ user_name: userName}, function(err, user)
	{
		if(err)
		{
			return callback(err);
		}

		//success
		return callback(null, user);
	});
}

exports.findById = function(id, callback)
{
	User.findById(id, function(err, user)
	{
		if(err)
		{
			return callback(err);
		}

		return callback(null, user);
	});
}
