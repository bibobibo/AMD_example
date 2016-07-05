requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../main'
  }
});


requirejs(['person', 'console'], function (Person) {
  var person = Person("Brant", 100);
  person.selfIntroduce();
});


