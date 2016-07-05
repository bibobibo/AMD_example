requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../main'
  }
});


requirejs(['simpleObj', 'simpleObj', 'console'], function (simpleObj1, simpleObj2, console) {
  console.log(simpleObj1);
  console.log(simpleObj2);
  simpleObj1.motto = "Just give up!!!";
  console.log(simpleObj2);

  console.log(simpleObj1 === simpleObj2);
});

requirejs(['simpleObj', 'console'], function (simpleObj, console) {
  console.log(simpleObj);
});


