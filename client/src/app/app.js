angular.module('usefulLinks', ['ui.router', 'ngResource']);

angular.module('usefulLinks').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/links/view');

    $stateProvider
        .state('links', {
            url: '/links',
            templateUrl: 'app/links/menu.tpl.html'
        })
        .state('links.view', {
            url: '/view',
            templateUrl: 'app/links/view/viewLinks.tpl.html',
            controller: 'ViewLinksController'
        })
        .state('links.edit', {
            url: '/edit?id',
            templateUrl: 'app/links/edit/editLinks.tpl.html',
            controller: 'EditLinksController'
        });

});