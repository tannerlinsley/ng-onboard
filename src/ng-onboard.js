var ngOnboard = angular.module('ng-onboard', []);

ngOnboard.service('ngOnboard', ['$rootScope',
    function() {
        var service = {
            options: {},
            initialized: false,
            init: function(selector) {
                if (!selector) {
                    console.log('ngOnboard Init', 'No element selector was specified!');
                    return;
                }
                service.onboard = $(selector)
                    .onboard(service.options);
                return service.onboard;
            },
            start: function(selector) {
                if (selector) {
                    service.init(selector);
                }
                if (!angular.isDefined(service.onboard)) {
                    console.log('ngOnboard Start', 'No element selector has been specified! Please ngOnboard.init(selector);');
                    return;
                }
                service.onboard.start();
            },
            stop: function() {
                if (!angular.isDefined(service.onboard)) {
                    console.log('ngOnboard Stop', 'No element selector has been specified! Please ngOnboard.init(selector);');
                    return;
                }
                service.onboard.stop();
            }
        };
        return service;
    }
]);
