(function(){

angular.module("quizApp")
.controller("listCtrl", ListController);

ListController.$inject = ['quizMetrix','DataService'];

function ListController(quizMetrix, DataService){
  var vm = this;
  vm.quizMetrix = quizMetrix;
  vm.data = DataService.turtlesData;
  vm.activeTurtle = {};
  vm.activateQuiz = activateQuiz;
  vm.changeActiveTurtle = changeActiveTurtle;
  vm.search = "";

function activateQuiz(){
quizMetrix.changeState(true);
}

  function changeActiveTurtle(index){
    vm.activeTurtle = index;
  }

}




})();
