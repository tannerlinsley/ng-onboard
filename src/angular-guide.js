var ngGuideDirective = angular.module('angular-guide', []);


ngGuideDirective.directive('ngGuideOptions', ['$timeout',
    function($timeout) {

        return {
            restrict: 'A',
            scope: {
                ngGuideMethod: "=",
                ngGuideOptions: '=',
                /*ngGuideOncomplete: '&',
                ngGuideOnexit: '&',
                ngGuideOnchange: '&',
                ngGuideOnbeforechange: '&',
                ngGuideOnafterchange: '&',
                ngGuideAutostart: '@'*/
            },
            link: function(scope, element, attrs) {
                scope.ngGuideMethod = function(step) {

                    var guide;

                    if (typeof(step) === 'string' || 0) {
                        guide = guideJs(step);

                    } else {
                        guide = $(element).guide();
                    }

                    guide.setOptions(scope.ngGuideOptions);

                    /*if (scope.ngGuideOncomplete) {
                        guide.oncomplete(scope.ngGuideOncomplete);
                    }

                    if (scope.ngGuideOnexit) {
                        guide.onexit(scope.ngGuideOnexit);
                    }

                    if (scope.ngGuideOnchange) {
                        guide.onchange(scope.ngGuideOnchange);
                    }

                    if (scope.ngGuideOnbeforechange) {
                        guide.onbeforechange(scope.ngGuideOnbeforechange);
                    }

                    if (scope.ngGuideOnafterchange) {
                        guide.onafterchange(scope.ngGuideOnafterchange);
                    }*/

                    if (typeof(step) === 'number' || 0) {
                        guide.goToStep(step).start();
                    } else {
                        guide.start();
                    }
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