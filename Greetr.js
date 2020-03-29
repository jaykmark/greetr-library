(function (global, $) {
  const Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language)
  }

  // Closures allow new instances of Greetr to have access to these abstracted properties
  const supportedLangs = ['en', 'es', 'chirp', 'newspeak']

  const greetings = {
    en: 'Hello',
    es: 'Hola',
    chirp: 'Why are you the way that you are?',
  };

  const formalGreetings = {
    en: 'Greetings',
    es: 'Saludos',
    chirp: `What's up whomp rat?`,
  };

  const logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion',
    chirp: `Get to whompin'`,
  }

  Greetr.prototype = {

    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    },

    validateLanguage: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },

    greeting: function () {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ' ' + this.firstName + '!';
    }
  };

  Greetr.init = function (firstName, lastName, language) {
    this.firstName = firstName || 'Dwight';
    this.lastName = lastName || 'Schrute';
    this.language = language || 'Love';
  }

  // Assign the prototype to our named prototype
  Greetr.init.prototype = Greetr.prototype;

  // Exposes our library to the global environment
  global.Greeter = global.G$ = Greetr;

})(window, jQuery)