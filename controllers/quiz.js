(function(){
  angular.module("quizApp").controller("quizCtrl", QuizController);

QuizController.$inject = ['quizMetrix', 'DataService'];


  function QuizController(quizMetrix, DataService){
    var vm= this;
    var numQuestionAnswered = 0;
    vm.quizMetrix = quizMetrix;
    vm.dataService = DataService;
    vm.activeQuestion = 0;
    vm.questionAnswered = questionAnswered;
    vm.setActiveQuestion = setActiveQuestion;
    vm.selectAnswer = selectAnswer;
    vm.error = false;
    vm.finalise = false;
    vm.finaliseAnswers = finaliseAnswers;

      function setActiveQuestion(index){
        if(index === undefined){
        var breakOut = false;
        var quizLength = DataService.quizQuestions.length -1;

        while(!breakOut){
          vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;
          if(vm.activeQuestion === 0){
            vm.error = true;
          }

          if(DataService.quizQuestions[vm.activeQuestion].selected === null){
            breakOut = true;
          }
        }
      }else{

        vm.activeQuestion = index;
      }

      }

    function questionAnswered(){

    var quizLength = DataService.quizQuestions.length;

    if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
        numQuestionAnswered++;
        if(numQuestionAnswered >= quizLength){
          for(var i = 0; i< quizLength; i++){
            if(DataService.quizQuestions[i].selected === null){
              setActiveQuestion(i);
              return;
            }
          }
          vm.error = false;
          vm.finalise = true;
          return;
        }
    }
vm.setActiveQuestion();

    }

    function selectAnswer(index){
      DataService.quizQuestions[vm.activeQuestion].selected = index;
    }

    function finaliseAnswers(){
      vm.finalise = false;
      numQuestionAnswered = 0;
      vm.activeQuestion = 0;
      quizMetrix.markQuiz();
      quizMetrix.changeState("quiz", false);
      quizMetrix.changeState("results", true);
    }
  }


})();
