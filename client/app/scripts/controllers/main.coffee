angular.module('portfolioApp').controller 'MainCtrl', ($scope, $timeout, $location, dataSvc) ->

  clearActive = (question) ->
    
    for b in question.buttons
      b.active = false
    
    return

  getQuestions = ->
    $scope.questions = [
      {
        label: 'I am a'
        buttons: [
          {
            id: 1
            text: 'Researcher'
            style: "btn-success"
          }
          {
            id: 2
            text: 'Student'
            style: "btn-danger"
          }
        ]
      }
      {
        label: 'I am a'
        buttons: [
          {
            id: 1
            text: 'non-EU citizen'
            style: "btn-success"
          }
          {
            id: 2
            text: 'I am an EU citizen'
            style: "btn-danger"
          }
          {
            id: 3
            text: 'I am a Nordic citizen'
            style: "btn-primary"
          }
        ]
      },
      {
        label: 'I'
        buttons: [
          {
            id: 1
            text: 'Receive salary from Finland'
            style: "btn-success"
          }
          {
            id: 2
            text: 'Have a grant awarded from Finland'
            style: "btn-danger"
          }
          {
            id: 3
            text: 'Have other funding'
            style: "btn-primary"
          }
        ]
      },
      {
        label: 'I stay in Finland'
        buttons: [
          {
            id: 1
            text: 'Less than 3 months'
            style: "btn-success"
          }
          {
            id: 2
            text: 'More than one year'
            style: "btn-danger"
          }
          {
            id: 3
            text: 'More than two years'
            style: "btn-primary"
          }
        ]
      }
    ]
    return

  getQuestions()

  $scope.setActive = (q, question) ->
    clearActive question
    q.active = true
    return

  $scope.isActive = (q) ->
    q.active

  $scope.submit = (questions) ->
    $location.path('results')

    return

  return
