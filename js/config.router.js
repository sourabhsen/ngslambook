'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams', '$cookieStore', '$location' ,'$http',
      function ($rootScope,   $state,   $stateParams, $cookieStore, $location , $http) {
	      
		// keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
             $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
		
		$rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/access/signin' && !$rootScope.globals.currentUser) {
                 $location.path('/access/signin');
            }
        }); 
		
		
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',  
      function ($stateProvider,   $urlRouterProvider) {
          var layout = "./tpl/app.html";
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
                  templateUrl: './tpl/page_lockme.html',
                  
              })
          
          .state('app.detail',{
              url:'/detail',
              templateUrl:'./tpl/page_profile.html' 
          
          })
		  .state('app.newForm',{
              url:'/newForm',
              templateUrl:'./tpl/form.html' 
          
          })
		   .state('app.newForm.profile', {
            url: '/profile',
            templateUrl: './tpl/form-profile.html'
        })
      
        // url will be /form/interests
        .state('app.newForm.interests', {
            url: '/interests',
            templateUrl: './tpl/form-interests.html'
        })
        
        // url will be /form/payment
        .state('app.newForm.payment', {
            url: '/payment',
            templateUrl: './tpl/form-payment.html'
        })
		.state('access', {
            url: '/access',
            template: '<div class="sigin-wrapper"><div ui-view class="fade-in-right-big smooth"></div></div>'
			
        })
		  
		.state('access.signin',{
              url:'/signin',
              templateUrl:'./tpl/page_signin.html'
			  
          
          })
		  .state('access.signup',{
              url:'/signup',
              templateUrl:'./tpl/page_signup.html'
			  
          
          })
		  .state('access.forgotpwd', {
                  url: '/forgotpwd',
                  templateUrl: './tpl/page_forgotpwd.html'
           })
          
            
      }
    ]
  );
