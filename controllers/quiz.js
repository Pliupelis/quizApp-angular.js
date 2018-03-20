(function(){
  angular.module("quizApp").controller("quizCtrl", "QuizController");

QuizController.$inject = ['quizMetrix','DataService'];


  function QuizController(quizMetrix, DataService){
    var vm= this;
    vm.quizMetrix = quizMetrix;
  }


})();
