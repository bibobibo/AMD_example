define(function() {
  var createDocFragmentByLog = function(arguments) {
    var docfragment = document.createDocumentFragment();
    var ul = document.createElement("ul");

    Array.from(arguments).forEach(function(argument) {
      var li = document.createElement("li");
      li.textContent = JSON.stringify(argument);
      ul.appendChild(li);
    });

    docfragment.appendChild(ul);

    return docfragment;
  };

  var oldLog = console.log;

  console.log = function() {
    document.body.appendChild(createDocFragmentByLog(arguments));
    oldLog.call(console, arguments);
  }

  return console;
});
