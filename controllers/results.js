(function(){
  angular.module("quizApp").controller("resultsCtrl", ResultsController);

ResultsController.$inject = ['quizMetrix', 'DataService'];
  function ResultsController(quizMetrix, DataService){
    var vm = this;
    vm.quizMetrix = quizMetrix;
    vm.dataService = DataService;
    vm.activeQuestion = 0;
    vm.getAnswerClass = getAnswerClass;
    vm.setActiveQuestion = setActiveQuestion;
    vm.calculatePerc = calculatePerc;
    vm.reset = reset;

    function calculatePerc(){
      return quizMetrix.numCorrect / DataService.quizQuestions.length * 100;
    }


      function setActiveQuestion(index){
        vm.activeQuestion = index;
      }

      function reset(){
        quizMetrix.changeState("results",false);
        quizMetrix.numCorrect = 0;

        for(var i = 0; i < DataService.quizQuestions.length; i++){
          var data = DataService.quizQuestions[i];
          data.selected = null;
          data.correct = null;
        }
      }


    function getAnswerClass(index){
      if(index === quizMetrix.correctAnswers[vm.activeQuestion]){
        return "bg-success";
      }
        else if(index === DataService.quizQuestions[vm.activeQuestion].selected){
        return "bg-danger";
        }
      }

  }

})();
