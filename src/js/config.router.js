'use strict';

/**
 * Config for the router
 */
Vince.run(
        ['$rootScope', '$state', '$stateParams',
            function($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        ['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider
                    .otherwise('/app/h5/origin');
                $stateProvider
                    .state('app', {
                        url: '/app',
                        templateUrl: 'src/view/home.html'
                    })
                    .state('app.h5', {
                        url: '/h5',
                        template: '<div ui-view class="fade-in-up"></div>'
                    })
                    .state('app.h5.origin', {
                        url: '/origin',
                        templateUrl: 'src/view/h5/h5-origin.html',
                        resolve: {
                            deps: function($ocLazyLoad) {
                                return $ocLazyLoad.load(['src/js/controllers/origin.js', 'src/js/services/h5Service.js']);
                            }
                        }
                    })
                    .state('app.h5.transfer', {
                        url: '/transfer',
                        templateUrl: 'src/view/h5/h5-transfer.html'
                    })
                    .state('app.h5.news', {
                        url: '/news',
                        templateUrl: 'src/view/h5/h5-news.html'
                    })

                /**
                 * 路由二
                 */
                .state('app.css3', {
                        url: '/css3',
                        template: '<div ui-view class="fade-in-up"></div>'
                    })
                    .state('app.css3.origin', {
                        url: '/origin',
                        templateUrl: 'src/view/h5/h5-origin.html'
                    })
                    .state('app.css3.transfer', {
                        url: '/transfer',
                        templateUrl: 'src/view/h5/h5-transfer.html'
                    })
                    .state('app.css3.news', {
                        url: '/news',
                        templateUrl: 'src/view/h5/h5-news.html'
                    })
            }
        ]
    );
