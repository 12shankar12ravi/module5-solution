(function (){

angular.module('public')
.controller('MenuItemscontroller' , MenuItemscontroller);

MenuItemscontroller.$inject = ['menuItems'];
function MenuItemscontroller (menuItems){
  var $ctrl = this ;
  $ctrl.menuItems = menuItems;
}

})();
