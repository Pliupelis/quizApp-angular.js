(function(){
  angular.module("quizApp").factory("quizMetrix", QuizMetrix );

  function QuizMetrix(){
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
