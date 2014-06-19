var ngOnboardDirective = angular.module('ng-onboard', []);


ngOnboardDirective.directive('ngOnboardOptions', ['$timeout',
    function($timeout) {

        return {
            restrict: 'A',
            scope: {
                ngOnboardMethod: "=",
                ngOnboardStop: "=",
                ngOnboardOptions: '=',
            },
            link: function(scope, element, attrs) {

                var onboard;

                scope.ngOnboardMethod = function() {
                    $timeout(function() {
                        onboard = $(element).onboard(scope.ngOnboardOptions);
                        onboard.start();
                    });
                };

                scope.ngOnboardStop = function() {
                    $timeout(function() {
                        onboard.stop();
                    });
                };

                if (scope.ngOnboardAutostart == 'true') {
                    $timeout(function() {
                        scope.ngOnboardMethod();
                    });
                }
            }
        };
    }
]);