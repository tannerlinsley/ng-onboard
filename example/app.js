var app = angular.module('myApp', ['ng-onboard']);

app.controller('MyController', function($scope) {

    $scope.onboardOptions = {
        steps: [{
            selector: document.querySelector('#step1'),
            intro: "This is the first tooltip."
        }, {
            selector: document.querySelectorAll('#step2')[0],
            intro: "<strong>You</strong> can also <em>include</em> HTML",
        }, {
            selector: '#step3',
            intro: 'More features, more fun.',
        }, {
            selector: '#step4',
            intro: "Another step.",
        }, {
            selector: '#step5',
            intro: 'Get it, use it.'
        }]
    };

});