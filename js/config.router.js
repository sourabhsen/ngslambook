'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 'MODULE_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG, MODULE_CONFIG ) {
          var layout = "/tpl/app.html";
              $urlRouterProvider
              .otherwise('/app/dashboard-v1');
          
        
          $stateProvider
             .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: layout
          })
          .state('app.dashboard-v1', {
                  url: '/dashboard-v1',
                  templateUrl: 'tpl/page_lockme.html',
                  
              })
          
          .state('app.detail',{
              url:'/detail',
              templateUrl:'/tpl/page_profile.html' 
          
          })
		  .state('app.newForm',{
              url:'/newForm',
              templateUrl:'/tpl/form.html' 
          
          })
		   .state('app.newForm.profile', {
            url: '/profile',
            templateUrl: '/tpl/form-profile.html'
        })
      
        // url will be /form/interests
        .state('app.newForm.interests', {
            url: '/interests',
            templateUrl: '/tpl/form-interests.html'
        })
        
        // url will be /form/payment
        .state('app.newForm.payment', {
            url: '/payment',
            templateUrl: '/tpl/form-payment.html'
        })
		  

          
            
      }
    ]
  );
