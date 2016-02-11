var _ = require('lodash');
var redis = require('redis');
var client = redis.createClient(); // By default will use 127.0.0.1 and 6379 as the hostname and port respectively

exports.getAll = function(req, res, next) {
  var namespace = 'weekly:';
  var key = namespace + 'all';

  client.zrevrange(key, 0, -1, 'withscores', function (err, members){
    if (err) next(err);
    console.log(members);
    var lists=_.groupBy(members, function(a,b) {
        return Math.floor(b/2);
    });
    var tuples = _.toArray(lists);
    console.log( tuples );
    res.send(tuples);
  });

};


exports.getForLang = function(req, res, next) {
  var namespace = req.params.language+":";
  var time_range = req.params.time_range || 'curr_week';
  var trending_modifier = req.params.trending_modifier || 'high';

  // for loop in [[400, 6], ...] return arrays of all data
  // [[],[],[]].forEach(function(tuple){

  // })

  var path = time_range+"_"+trending_modifier;
  var key = namespace + path;

  client.zrevrange(key, 0, -1, 'withscores', function (err, members){
    if (err) next(err)
    console.log(members);
    var lists=_.groupBy(members, function(a,b) {
        return Math.floor(b/2);
    });
    console.log( _.toArray(lists) );
    res.send(_.toArray(lists))
  });

};