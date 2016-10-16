//
// Use the following code for running without authentication.
//
//'use strict';
//angular.module('todoApp', ['ngRoute'])
//.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
//    $routeProvider.when("/Home", {
//        controller: "homeCtrl",
//        templateUrl: "/App/Views/Home.html",
//    }).when("/TodoList", {
//        controller: "todoListCtrl",
//        templateUrl: "/App/Views/TodoList.html",
//    }).when("/UserData", {
//        controller: "userDataCtrl",
//        templateUrl: "/App/Views/UserData.html",
//    }).otherwise({ redirectTo: "/Home" });
//}]);


//
// Use the following code for running with authentication.
//
'use strict';
angular.module('todoApp', ['ngRoute', 'AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/App/Views/Home.html",
    }).when("/TodoList", {
        controller: "todoListCtrl",
        templateUrl: "/App/Views/TodoList.html",
        requireADLogin: true,
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
    }).otherwise({ redirectTo: "/Home" });

    var endpoints = {
        //   "https://todolistapi20161014060304.azurewebsites.net/": "{client ID of Azure AD app}"
        "https://todolistapi20161014060304.azurewebsites.net/": "bc0f015a-a020-473e-b4f3-59a2d306d996"
    };

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/',
            tenant: 'firstec.co.nz',
            clientId: 'bc0f015a-a020-473e-b4f3-59a2d306d996',
            extraQueryParameter: 'nux=1',
            endpoints: endpoints
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
        );

}]);

