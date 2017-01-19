
var app = angular.module('ngEvents', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'pages/app.html'
    })

    .state('app.signup', {
      url: '/signup',
      templateUrl: 'pages/app-signup.html',
      controller: 'appCtrl'
    })

    .state('app.login', {
      url: '/login',
      templateUrl: 'pages/app-login.html',
      controller: 'appCtrl'
    })

    .state('app.forget', {
      url: '/forget',
      templateUrl: 'pages/app-forget.html',
      controller: 'appCtrl'
    })

    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'pages/main.html'
    })

    .state('main.eventlist', {
      url: '/eventlist',
      views: {
        'mainview': {
          templateUrl: "pages/event-list.html",
          controller: 'mainCtrl'
        }
      }
    })

    .state('main.addevent', {
      url: '/addevent',
      views: {
        'mainview': {
          templateUrl: "pages/add-event.html",
          controller: 'mainCtrl'
        }
      }
    })

    .state('main.votelist', {
      url: '/votelist',
      views: {
        'mainview': {
          templateUrl: "pages/vote-list.html",
          controller: 'mainCtrl'
        }
      }
    })

    .state('main.addvote', {
      url: '/addvote',
      views: {
        'mainview': {
          templateUrl: "pages/add-vote.html",
          controller: 'mainCtrl'
        }
      }
    })

    .state('main.voteDetails', {
      url: '/voteDetails',
      views: {
        'mainview': {
          templateUrl: "pages/vote-details.html",
          controller: 'mainCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('app/login');

  $ionicConfigProvider.backButton.text('');

});

