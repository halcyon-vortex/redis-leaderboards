var _ = require('lodash');
var redis = require('redis');
var client = redis.createClient(); // By default will use 127.0.0.1 and 6379 as the hostname and port respectively

exports.getTrending = function(req, res, next) {
  var language = req.query.language || 'All';
  var time_range = req.query.time_range || 'curr_week';
  var trending_modifier = req.query.trending_modifier || 'high';

  var key = language+":"+time_range+"_"+trending_modifier;

  client.zrevrange(key, 0, -1, 'withscores', function (err, members){
    if (err) throw(err)
    console.log(members);
    var lists=_.groupBy(members, function(a,b) {
        return Math.floor(b/2);
    });
    console.log( _.toArray(lists) );
    res.send(_.toArray(lists))
  });

};