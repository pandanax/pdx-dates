angular.module('pdxDates')

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/partials/home.html',
                controller: 'homeCtrl'
            })

        $routeProvider.otherwise('/home');


        $locationProvider.html5Mode(true);
    });

