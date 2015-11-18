angular.module('wechat.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("tab", {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html",
        })
        .state('tab.message', {
            url: '/message',
            views: {
                'tab-message': {
                    templateUrl: 'templates/tab-message.html',
                    controller: "messageCtrl"
                }
            }
        })
        .state('tab.friends', {
            url: '/friends',
            views: {
                'tab-friends': {
                    templateUrl: 'templates/tab-friends.html',
                    controller: "friendsCtrl"
                }
            }
        })
        .state('tab.find', {
            url: '/find',
            views: {
                'tab-find': {
                    templateUrl: 'templates/tab-find.html',
                    controller: "findCtrl"
                }
            },
        })
        .state('tab.setting', {
            url: '/setting',
            views: {
                'tab-setting': {
                    templateUrl: 'templates/tab-setting.html',
                    controller: "settingCtrl"
                }
            }
        });

    $urlRouterProvider.otherwise("/tab/message");
});
