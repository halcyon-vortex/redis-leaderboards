module.exports = function(controller, router) {

  router.route('/')
    .get(controller.getAll);

  router.route('/:language/:time_range/:trending_modifier')
    .get(controller.getForLang);
};


// need multiple params
// :time_range for monthly/weekly/daily, curr_week, prev_week
// :base_modifier to increase denominator 
// :exponent_modifier to increase dropoff of larger repos
// :trending_modifier low | medium | high to adjust the trending window