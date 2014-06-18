var ngGuideDirective = angular.module('angular-guide', []);


ngGuideDirective.directive('ngGuideOptions', ['$timeout',
    function($timeout) {

        return {
            restrict: 'A',
            scope: {
                ngGuideMethod: "=",
                ngGuideOptions: '=',
            },
            link: function(scope, element, attrs) {
                scope.ngGuideMethod = function() {
                    $timeout(function() {
                        var guide = $(element).guide(scope.ngGuideOptions);
                        console.log('options set', scope.ngGuideOptions);
                        guide.start();
                        console.log('tour started');
                    });
                };

                if (scope.ngGuideAutostart == 'true') {
                    $timeout(function() {
                        scope.ngGuideMethod();
                    });
                }
            }
        };
    }
]);