/**
 * === Javascript 路由 模块 ======================
 * Copyright (c) 2016 YangCheung, All rights reserved.
 * http://yangcheung.github.com
 * 
 * @version 1.0
 * @author  YangCheung <876753183@qq.com>
 * @description 项目路由控制器
 * ---2016-6-29 ----------------------------------------
 */

'use strict';
/**
 * Config for the router
 */
Young.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/clib/welcome');
    $stateProvider
        .state('clib', {
            url: '/clib',
            templateUrl: 'src/pages/tpl/home.html'
        })
        .state('clib.welcome', {
            url: '/welcome',
            templateUrl: 'src/pages/tpl/welcome.html'
        })

    /**
     * 菜单:动画 animation
     */
    .state('clib.animation', {
            url: '/animation',
            template: '<div ui-view></div>'
        })
        .state('clib.animation.buttons', {
            url: '/buttons',
            templateUrl: 'src/pages/module/animation/buttons.html',
            resolve: {
                deps: function($ocLazyLoad) {
                    return $ocLazyLoad.load(['src/styles/buttons.css']);
                }
            }
        })
        .state('clib.animation.circleTransition', {
            url: '/circleTransition',
            templateUrl: 'src/pages/module/animation/circleTransition.html'
        })
        .state('clib.animation.timedNotice', {
            url: '/timedNotice',
            templateUrl: 'src/pages/module/animation/timedNotice.html'
        })
        .state('clib.animation.createToolTip', {
            url: '/createToolTip',
            templateUrl: 'src/pages/module/animation/createToolTip.html'
        })
        .state('clib.animation.loading', {
            url: '/loading',
            templateUrl: 'src/pages/module/animation/loading.html'
        })
        /**
         * 图片
         */
        .state('clib.image', {
            url: '/image',
            template: '<div ui-view></div>'
        })
        .state('clib.image.gallery', {
            url: '/gallery',
            templateUrl: 'src/pages/module/image/gallery.html',
            resolve: {
                deps: function($ocLazyLoad) {
                    return $ocLazyLoad.load(['src/js/plugin/modernizr.js', 'src/js/plugin/jquery.gallery.js'])
                }
            }
        })

    .state('clib.editor', {
        url: '/editor',
        templateUrl: 'src/pages/module/editor/editor.html'
    });
});
