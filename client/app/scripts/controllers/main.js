(function() {
  angular.module('portfolioApp').controller('MainCtrl', function($scope, $timeout, $location, dataSvc) {
    var clearActive, getQuestions;
    clearActive = function(question) {
      var b, i, len, ref;
      ref = question.buttons;
      for (i = 0, len = ref.length; i < len; i++) {
        b = ref[i];
        b.active = false;
      }
    };
    getQuestions = function() {
      $scope.questions = [
        {
          label: 'I am a',
          buttons: [
            {
              id: 1,
              text: 'Researcher',
              style: "btn-success"
            }, {
              id: 2,
              text: 'Student',
              style: "btn-danger"
            }
          ]
        }, {
          label: 'I am a',
          buttons: [
            {
              id: 1,
              text: 'non-EU citizen',
              style: "btn-success"
            }, {
              id: 2,
              text: 'I am an EU citizen',
              style: "btn-danger"
            }, {
              id: 3,
              text: 'I am a Nordic citizen',
              style: "btn-primary"
            }
          ]
        }, {
          label: 'I',
          buttons: [
            {
              id: 1,
              text: 'Receive salary from Finland',
              style: "btn-success"
            }, {
              id: 2,
              text: 'Have a grant awarded from Finland',
              style: "btn-danger"
            }, {
              id: 3,
              text: 'Have other funding',
              style: "btn-primary"
            }
          ]
        }, {
          label: 'I stay in Finland',
          buttons: [
            {
              id: 1,
              text: 'Less than 3 months',
              style: "btn-success"
            }, {
              id: 2,
              text: 'More than one year',
              style: "btn-danger"
            }, {
              id: 3,
              text: 'More than two years',
              style: "btn-primary"
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
      $location.path('results');
    };
  });

}).call(this);
