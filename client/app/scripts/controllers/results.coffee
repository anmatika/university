angular.module('portfolioApp').controller 'ResultsCtrl', ($scope, $timeout, dataSvc) ->
	dataSvc.getResults()
	.then( (r)-> $scope.results = r )
	