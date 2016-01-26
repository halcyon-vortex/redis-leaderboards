module.exports = function(controller, router) {

  router.route('/')
    .get(controller.getAll);

  router.route('/:language')
    .get(controller.getForLang);
};