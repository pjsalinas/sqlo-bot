/**
    Twitter - bot
*/

require('./config.js');

const Twit = require('twit');
const strings = require('./strings.js');

console.log(strings.queryString);

const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


var retweet = function() {
	var params = {
		q: '#nodejs, #node.js',
		result_type: 'recent',
		lang: 'en'

	};

	T.get('search/tweets', params, function(err, data) {
		console.log(data);
	});
};

// Get the list of user id's that follow @sqlo
var getFollowers = function() {
	T.get('followers/ids', { screen_name: 'sqlo' }, function(err, data, response){
		console.log(data.ids);
		console.log('Num. of followers: ' + data.ids.length);
	});
};

getFollowers();

//retweet();

