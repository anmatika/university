// Generated by CoffeeScript 1.10.0
(function() {
  angular.module('portfolioApp').controller('MainCtrl', function($scope, $timeout, dataSvc) {
    var clearActive, getQuestions;
    clearActive = function(question) {
      question.yes.active = false;
      question.no.active = false;
    };
    getQuestions = function() {
      $scope.questions = [
        {
          label: 'I am researcher',
          buttons: [
            {
              id: 1,
              text: 'Yes'
            }, {
              id: 2,
              text: 'No'
            }
          ]
        }, {
          label: 'I am a',
          buttons: [
            {
              id: 1,
              text: 'non-EU citizen'
            }, {
              id: 2,
              text: 'I am an EU citizen'
            }, {
              id: 3,
              text: 'I am a Nordic citizen'
            }
          ]
        }
      ];
    };
    getQuestions();
    $scope.setActive = function(q, question) {
      clearActive(question);
      q.active = true;
    };
    $scope.isActive = function(q) {
      return q.active;
    };
    $scope.submit = function(questions) {
      $scope.result = 'Lorem ipsum dolor sit amet, euismod appellantur vis at, stet illum legendos mei ad. Dico everti volumus at usu. Sint commune honestatis nam ex, per no quem nihil equidem, solet ridens nec ex. In mei ludus partem vivendo, officiis lucilius legendos at eos.';
    };
  });

}).call(this);
