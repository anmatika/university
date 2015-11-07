angular.module('portfolioApp').controller 'MainCtrl', ($scope, $timeout, dataSvc) ->

  clearActive = (question) ->
    question.yes.active = false
    question.no.active = false
    return

  getQuestions = ->
    $scope.questions = [
      {
        label: 'I am researcher'
        buttons: [
          {
            id: 1
            text: 'Yes'
          }
          {
            id: 2
            text: 'No'
          }
        ]
      }
      {
        label: 'I am a'
        buttons: [
          {
            id: 1
            text: 'non-EU citizen'
          }
          {
            id: 2
            text: 'I am an EU citizen'
          }
          {
            id: 3
            text: 'I am a Nordic citizen'
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
    $scope.result = 'Lorem ipsum dolor sit amet, euismod appellantur vis at, stet illum legendos mei ad. Dico everti volumus at usu. Sint commune honestatis nam ex, per no quem nihil equidem, solet ridens nec ex. In mei ludus partem vivendo, officiis lucilius legendos at eos.'
    return

  return
