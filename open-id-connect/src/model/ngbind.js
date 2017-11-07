var app = angular.module("login", []); 
app.controller('loginController', function($scope) {
    var openid_IMPLICIT ="https://localhost:8243/authorize?client_id=FZHKcK1fZIsNBEvTLnoJF0FAEn0a&redirect_uri=http://localhost:8081/profile&response_type=id_token%20token&scope=openid&nonce=1244434";
   $scope.submit = function(){
      window.location.href=openid_IMPLICIT;
   }
});

