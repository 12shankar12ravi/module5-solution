(function (){


angular.module("public")
.service("SignUpService",SignUpService);

SignUpService.$inject = ['$http' ,'ApiPath','MenuService'];
function SignUpService($http,ApiPath,MenuService){

  var service = this;
  service.userdata = {
    firstName : "",
    lastName : "",
    phone: "",
    email: "",
    favItem: "",
  }

  service.isItemExist = function (shortName){
    console.log('Short Name is :',shortName);
    return $http.get(ApiPath+'/menu_items/'+shortName+'.json').then(function (response){
      return true;
    });
  }

  service.getMenuItemDetails = function (){
    return $http.get(ApiPath+'/menu_items/'+service.userdata.favItem+'.json').then(function (response){
      return response.data;
    }).catch(
      function(error){
        return "";
      }
    );
  }

  service.saveUserData = function (user_data){
      service.userdata= user_data;
      console.log(service.userdata.firstName ,service.userdata.lastName, service.userdata.phone,
        service.userdata.email,service.userdata.favItem);
  }

  service.getUserdata = function (){
    return service.userdata;
  }

}

})();
