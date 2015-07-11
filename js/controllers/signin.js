'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state','$location','AuthenticationService', function($scope, $http, $state, $location, AuthenticationService) {
    // reset login status
    //    AuthenticationService.ClearCredentials();
        
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.user.username, $scope.user.password, function(response) {
                if(response.success) {
                   // AuthenticationService.SetCredentials($scope.user.username, $scope.user.password,"");
				   console.log(app.settings);
                    $location.path('/app/dashboard-v1');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
  }])
;


app.controller('SignupFormController', ['$scope', '$http', '$state','$location','AuthenticationService', function($scope, $http, $state, $location, AuthenticationService) {
    // reset login status
    //    AuthenticationService.ClearCredentials();
 
        $scope.signup = function () {
            $scope.dataLoading = true;
            AuthenticationService.validCredentials($scope.user.name, $scope.user.password, $scope.user.email, function(response) {
                if(response.success) {
                    $scope.authError = response.message;
                    $scope.dataLoading = false;
                } else {
					AuthenticationService.SetCredentials($scope.user.name, $scope.user.password,$scope.user.email);
                    $location.path('/access/signin');
					$scope.dataLoading = false;
                }
            });
        };
  }])
;