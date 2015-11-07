
angular.module('portfolioApp').service 'dataSvc', ($http, $q, $timeout) ->
  results = [
      { 
          text: "Apply for a residence permit/Visit the police
                Instructions..
                Required documents.."
               
      },
      { 
          text: "Visit the In to Finland Service Point: tax card and KELA
                Instructions..
                Required documents..
                "
               
      }
      { 
          text: "Visit the Local Register Office
                Instructions..
                Required documents..
                "
               
      }
      { 
          text: "Open a bank account
                Instructions..
                Required documents..
                "
      }
      { 
          text: "Other
                Instructions..
                "
      }
        
    ]

  getResults = (path) ->
    deferred = $q.defer()
    $timeout(()->
      deferred.resolve results
      , 1000)
    
    deferred.promise

  { getResults: getResults }

