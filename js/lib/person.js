define(function() {
  var _instanceNumber = 0;
  var _name = '';
  var _age = 0;

  var setName = function(name) {
    _name = name;
  };

  var setAge = function(age) {
    _age = age;
  }

  var growUp = function() {
    _age += 1;
  };

  var selfIntroduce = function() {
    console.log("Hello everyone, I am " + _name + " and I am " + _age + " years old. There are " + _instanceNumber + " persons in the world now!");
  };

  var Person = function(name, age) {
    _name = name;
    _age = age;
    _instanceNumber++;

    return {
      setName: setName,
      setAge: setAge,
      growUp: growUp,
      selfIntroduce: selfIntroduce
    }
  };

  return Person;
});
