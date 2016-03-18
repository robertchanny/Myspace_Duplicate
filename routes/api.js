var mongoose = require('mongoose'),
	express = require('express'),
	Profile = require('../models/Profile'),
	router = express.Router();

router.get('/:resource', function(req,res,next){
	var resource = req.params.resource;
	if(resource=='profile'){
		Profile.find(req.query, function(err,profiles){
			if(err){
				res.send({
					confirmation: 'fail',
					message: err.message
				});
				return;
			}
			var list = [];
			for(var i=0; i < profiles.length; i++){
				list.push(profiles[i].summary());
			}
			res.send({
				confirmation: 'success',
				profiles: list
			});
			return;
		});
		return;
	}
	res.send({
		confirmation: 'fail',
		message: 'Invalid resource'
	});
	return;
});

router.post('/:resource', function(req,res,next){
	var resource = req.params.resource;
	if(resource =='login'){
		var credentials = req.body;
		Profile.find({email:credentials.email}, function(err,profiles){
			if(err){
				res.send({
					confirmation: 'fail',
					message: err.message
				});
				return;
			}
			if (profiles.length ==  0){
				res.send({
					confirmation: 'fail',
					message: 'Profile with specified e-mail not found'
				});
				return;
			}

			var profile = profiles[0];

			if (profile.password != credentials.password){
				res.send({
					confirmation: 'fail',
					message: 'Invalid password'
				});
				return;
			}

			res.send({
				confirmation: 'success',
				profile: profile.summary()
			});
			return;
		})
		return;
	}

	if(resource =='profile'){
		Profile.create(req.body, function(err,profile){
			if(err){
				res.send({
					confirmation: 'fail',
					message: err.message
				});
				return;
			}
			res.send({
				confirmation: 'success',
				profile: profile.summary()
			});
			return;
		})
		return;
	}
	res.send({
		confirmation: 'fail',
		message: 'Invalid resource'
	});
	return;
});

module.exports = router;