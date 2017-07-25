(function(){

angular.module("public")
.controller("SignUpController",SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService){

  var signup = this;
  signup.userdata= {
    firstName: "",
    lastName: "",
    email:"",
    phone:"",
    favItem:""
  };

  signup.favitemExist=true;
  signup.completed= false;
  signup.submitflag = false;

  signup.checkFavItem = function (){
    //signup.favitemExist =  (SignUpService.isItemExist(signup.userdata.favItem)!==null)?true:false;
    SignUpService.isItemExist(signup.userdata.favItem).then(
      function(response){
        signup.favitemExist = true;
        signup.submitcheck();//(response.data!==null || response.data!=="")?true:false;
      }
    ).catch(
      function(error){
        signup.favitemExist = false;
        signup.submitcheck();
        console.log("Something Went Wrong");
      }
    )
  }

  signup.submitflagactivate = function (){
    signup.submitflag = true;
  }

  signup.submitcheck = function () {
    if(signup.submitflag==true){
          if(signup.userdata.firstName!="" && signup.userdata.lastName!=""
                && signup.userdata.email!="" && signup.userdata.phone!="" && signup.userdata.favItem!=""
                && signup.favitemExist!=false
              ){
            signup.completed = true;
            SignUpService.saveUserData(signup.userdata);
          }
    }
  }

}


})();
