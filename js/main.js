requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../main'
  }
});


requirejs(['person'], function (Person) {
  var person = Person("Brant", 100);
  person.selfIntroduce();
});


