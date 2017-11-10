var app = angular.module("login", []); 
app.controller('loginController', function($scope) {
    var api_gateway = "https://localhost:8243/authorize?";
    var client_id = "client_id=xQ6u0HAIDiDz4Vnns5Y_UQP4Oesa";
    var redirect_uri = "redirect_uri=http://localhost:8081/profile";
    var response_type = "response_type=id_token%20token";
    var scope = "scope=openid";
    var nonce = "nonce=1244";
    var openid_implicit = api_gateway+client_id+"&"+redirect_uri+"&"+response_type+"&"+scope+"&"+nonce;
    $scope.submit = function(){
      window.location.href = openid_implicit;
   }
});

