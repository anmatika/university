'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * #
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngLocale',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'zeroclipboard',
    'hljs'
  ])
  .config(function($routeProvider, $translateProvider, $locationProvider, uiZeroclipConfigProvider) {
    $routeProvider
      .when('/', {
       templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $translateProvider.translations('en', {
        aboutMe: 'CV',
        blog: 'Blog',
        services: 'Services',
        contact: 'Contact',
        signUp: 'Sign up',
        login: 'Log in',
        addToCart: 'Add to cart',
        thisItemIsInYourCart: 'This item is in your cart',
        quantity: 'Quantity',
        price: 'Price',
        total: 'Total',
        checkout: 'Checkout',
        logout: 'Log out',
        account: 'Account'
      }).translations('fi', {
        aboutMe: 'Tietoja',
        blog: 'Blogi',
        services: 'Palvelut',
        contact: 'Yhteystiedot',
        signUp: 'Rekisteröidy',
        login: 'Kirjaudu',
        addToCart: 'Ostoskoriin',
        thisItemIsInYourCart: 'Tuote lisätty ostoskoriisi',
        quantity: 'Määrä',
        price: 'Hinta',
        total: 'Yhteensä',
        checkout: 'Kassalle',
        logout: 'Kirjaudu ulos',
        account: 'Tili'
      });
      $translateProvider.preferredLanguage('en');

       // config ZeroClipboard
      uiZeroclipConfigProvider.setZcConf({
        swfPath: '../bower_components/zeroclipboard/dist/ZeroClipboard.swf'
      });

      // $locationProvider.html5Mode(true);
      // $locationProvider.hashPrefix('!');
  });