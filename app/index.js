require("./style/style01.css");
require("expose?$!jquery");
require("bootstrap-webpack");
require("./index.html");

var angular = require('angular');

var app = angular.module('app', []);

app.controller('HomeController', function ($scope) {


    $scope.produto = [
        {
            id: 01,
            name: 'Monitor'

        },
        {
            id: 02,
            name: 'Notebook'

        },
        {
            id: 03,
            name: 'Teclado'

        },
        {
            id: 04,
            name: 'Mouse'
        },
        {
            id: 05,
            name: 'Pen-driver'
        },
        {
            id: 06,
            name: 'HD'
        },
        {
            id: 07,
            name: 'Switch'
        }

  ];

});

app.controller('LoginController', function ($scope, $window) {
    
    $scope.login = function (user, pass) {
        if (user == 'teste' && pass == 'teste') {
            $window.location.href = 'home.html';
        } else {
            alert('Usuário ou senha esta incorreto.');
        }
    };
    
});