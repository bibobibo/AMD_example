requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../main'
  }
});


requirejs(['person', 'person', 'console'], function (PersonOne, PersonTwo, console) {
  var personOneInstance = PersonOne("Brant", 100);
  personOneInstance.selfIntroduce();

  var personTwoInstance = PersonTwo("Larry", 5);
  personTwoInstance.selfIntroduce();

  var personThreeInstance = PersonOne("Tom", 27);
  personThreeInstance.selfIntroduce();

  personThreeInstance.growUp();
  personThreeInstance.selfIntroduce();
  console.log("PersonOne === PersonTwo ? " + (PersonOne === PersonTwo));
});


