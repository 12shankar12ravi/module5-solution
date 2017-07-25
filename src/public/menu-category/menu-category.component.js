(function () {
"use strict";

angular.module('public')
.component('menuCategory',{
  templateUrl : 'src/public/menu-category/menu-category.template.html',
  bindings : {
    category : '<'
  }
});


})()
