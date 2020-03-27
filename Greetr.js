(function (global, $) {
  const Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language)
  }

  Greetr.prototype = {};

  Greetr.init = function (firstName, lastName, language) {
    this.firstName = firstName || 'Michael';
    this.lastName = lastName || 'Scott';
    this.language = language || 'Love';
  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greeter = global.G$ = Greetr;

})(window, jQuery)