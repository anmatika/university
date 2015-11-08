(function() {
  angular.module('portfolioApp').controller('ResultsCtrl', function($scope, $timeout, dataSvc) {
    return dataSvc.getResults().then(function(r) {
      return $scope.results = r;
    });
  });

}).call(this);
