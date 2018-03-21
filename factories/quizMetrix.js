(function(){
  angular.module("quizApp").factory("quizMetrix", QuizMetrix );

  QuizMetrix.$inject = ['DataService'];


  function QuizMetrix(DataService){
  var quizObj ={
    quizActive: false,
    changeState: changeState
  };
return quizObj;

function changeState(state){
  quizObj.quizActive = state;
}
  }

})();
