(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl : 'src/public/menu/menu.html',
      controller : 'MenuController',
      controllerAs : 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems',{
      url: '/menu/{category}',
      templateUrl: 'src/public/menu/menu-items/menu-items.template.html',
      controller : 'MenuItemscontroller',
      controllerAs : 'menuitemsctrl',
      resolve : {
        menuItems : ['$stateParams','MenuService' ,function ($stateParams,MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup',{
      url:'/signup',
      templateUrl: 'src/public/sign-up/sign-up.template.html',
      controller: 'SignUpController',
      controllerAs: 'signup'
    })
    .state('public.myinfo',{
      url:'/myinfo',
      templateUrl: 'src/public/my-info/my-info.template.html',
      controller: 'MyInfoController',
      controllerAs: 'myinfo',
      resolve : {
        itemdetails : ['SignUpService' ,function (SignUpService) {
          return SignUpService.getMenuItemDetails();
        }]
      }
    })
}
})();