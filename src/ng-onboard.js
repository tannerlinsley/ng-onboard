var ngOnboardDirective = angular.module('ng-onboard', []);


ngOnboardDirective.directive('ngOnboardOptions', ['$timeout',
    function($timeout) {

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {

                var onboard;

                attrs.$observe('ngOnboardMethod', function(value) {
                    value = function() {
                        $timeout(function() {
                            onboard = $(element)
                                .onboard(scope.ngOnboardOptions);
                            onboard.start();
                        });
                    };
                });

                attrs.$observe('ngOnboardStop', function(value) {
                    value = function() {
                        $timeout(function() {
                            onboard.stop();
                        });
                    };
                });

                scope.ngOnboardMethod = function() {
                    $timeout(function() {
                        onboard = $(element)
                            .onboard(scope.ngOnboardOptions);
                        onboard.start();
                    });
                };

                scope.ngOnboardStop = function() {
                    $timeout(function() {
                        onboard.stop();
                    });
                };

                if (attrs.ngOnboardAutostart == 'true') {
                    $timeout(function() {
                        scope.ngOnboardMethod();
                    });
                }
            }
        };
    }
]);
