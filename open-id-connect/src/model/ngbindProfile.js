var app = angular.module("profile", []); 
app.controller('profileController', function($scope,$http) {
     var url = window.location.href; 
     var string = url.split("&");
     var id_token = JSON.parse(JSON.stringify(string[1]));
     id_token = id_token.replace("id_token=","");
     id_token = id_token.split('.');
     var access_token = JSON.parse(JSON.stringify(string[0]));
     access_token = access_token.split('#');
     access_token = access_token[1];
     access_token = access_token.replace('access_token=',''); 
     id_token = atob(id_token[1]);
     $scope.data = id_token;
     id_token = JSON.parse(id_token);
     $scope.headtext = "Logged in as "+id_token['sub'];
     $scope.access_token = access_token;
     $scope.logout = function() {
        var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        window.location.href="http://localhost:8081/login";
     }
     
     $scope.invoke=function(){
        $(function(){
            $('#myModal').modal('show');
        });
     }

    $scope.call = function(){
        $http.get($scope.api, {
            headers: {
                "Authorization": 'Bearer '+access_token
            }
          }).then(function(response){
            $scope.response_body = response;
          },function errorCallback(response) {
                if(response.status = 401){ 
                    alert("Unauthorized");
                }
        });
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
}).directive("invoke", function() {
    return {
        template : '<button type="button" class="btn btn-secondary" data-dismiss="modal" ng-click="call()">Call</button>'
    };
}).directive("resbody", function() {
    return {
        template : '<p class="card-text token text-center">{{response_body}}</p>'
    };
});

