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

// search twitter for all tweets containing the 'word' or 'words'
var lookForTweets = function() {
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


// retweet a tweet with id
var retweet = function(id) {
  T.post('statuses/retweet/:id', { id: id }, function(err, data, response){
    console.log(data);
  });
};


//retweet(id);
//getFollowers();
//lookForTweets();
