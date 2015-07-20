angular.module('app')
  .directive('uiScrollTo', function($window) {
    return function($scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.scrollY >= 50) {
                 $scope.boolChangeClass = true;
             } else {
                 $scope.boolChangeClass = false;
             }
            $scope.$emit('scroll',$scope.boolChangeClass);
        });
    };
  });
