(function (){

angular.module('public')
.controller('MyInfoController',MyInfoController);

MyInfoController.$inject = ['SignUpService','itemdetails'];
function MyInfoController(SignUpService,itemdetails){

  var myinfo = this ;
  myinfo.infoExist = false;
  myinfo.userdata = SignUpService.getUserdata();

  myinfo.itemdetails = itemdetails;

  if(myinfo.userdata.firstName!="" && myinfo.userdata.lastName!=""
        && myinfo.userdata.email!="" && myinfo.userdata.phone!="" && myinfo.userdata.favItem!=""){
    myinfo.infoExist = true;
  }else{
    myinfo.infoExist = false;
  }

}

})()
