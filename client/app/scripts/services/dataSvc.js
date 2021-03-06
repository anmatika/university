(function() {
  angular.module('portfolioApp').service('dataSvc', function($http, $q, $timeout) {
    var getResults, results;
    results = [
      {
        text: "Apply for a residence permit/Visit the police Instructions.. Required documents.."
      }, {
        text: "Visit the In to Finland Service Point: tax card and KELA Instructions.. Required documents.."
      }, {
        text: "Visit the Local Register Office Instructions.. Required documents.."
      }, {
        text: "Open a bank account Instructions.. Required documents.."
      }, {
        text: "Other Instructions.."
      }
    ];
    getResults = function(path) {
      var deferred;
      deferred = $q.defer();
      $timeout(function() {
        return deferred.resolve(results, 1000);
      });
      return deferred.promise;
    };
    return {
      getResults: getResults
    };
  });

}).call(this);
