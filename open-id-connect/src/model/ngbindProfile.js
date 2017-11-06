var app = angular.module("profile", []); 
app.controller('profileController', function($scope) {
     var url = window.location.href; 
     var string = url.split("&");
     var id_token = JSON.parse(JSON.stringify(string[1]));
     id_token = id_token.replace("id_token=","");
     id_token = id_token.split('.');
     var access_token =JSON.parse(JSON.stringify(string[0]));
     access_token = access_token.split('#');
     access_token = access_token[1];
     access_token=access_token.replace('access_token=',''); 
     id_token=atob(id_token[1]);
     $scope.data = id_token;
     id_token=JSON.parse(id_token);
     $scope.headtext="Logged in as "+id_token['sub'];
     $scope.access_token=access_token;
     $scope.logout=function(){
         window.location.href="http://localhost:8081/login"
     }
});
app.directive("header", function() {
    return {
        template : '<label class="header-label">{{headtext}}</label>'
    };
}).directive("token", function() {
    return {
        template : '<p class="card-text token text-center">{{access_token}}</p>'
    };
}).directive("userdata", function() {
    return {
        template : '<p class="card-text token text-center">{{data}}</p>'
    };
});

