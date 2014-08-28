var ngOnboard = angular.module('ngOnboard', []);

ngOnboard.service('ngOnboard', [

    function() {
        var service = {
            options: {},
            onboard: false,
            start: function(selector, options) {
                if (options) {
                    service.options = options;
                }
                if (selector) {
                    service.onboard = $(selector)
                        .onboard(service.options);
                    service.onboard.start();
                    return service.onboard;
                }
                console.log('ngOnboard Stop', 'No selector was specified!');
            },
            stop: function() {
                if (!service.onboard) {
                    console.log('ngOnboard Stop', 'No onboard is running!');
                    return;
                }
                service.onboard.stop();
            },
            next: function() {
                service.onboard.next();
            },
            previous: function() {
                service.onboard.previous();
            },
            gotoStep: function(i) {
                service.onboard.gotoStep(i);
            }
        };
        return service;
    }
]);
