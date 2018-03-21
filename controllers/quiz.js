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

      function setActiveQuestion(index){
        if(index === undefined){
        var breakOut = false;
        var quizLength = DataService.quizQuestions.length -1;

        while(!breakOut){
          vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;

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

        }
    }
vm.setActiveQuestion();

    }

    function selectAnswer(index){
      DataService.quizQuestions[vm.activeQuestion].selected = index;
    }
  }


})();
