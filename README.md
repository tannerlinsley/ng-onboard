ng-onboard
================

An angularjs directive that wraps [onboard.js](https://github.com/nozzle/onboard.js).

For a demo, please visit [onboard.js](https://github.com/nozzle/onboard.js/tree/master)

## Bower

You can install this package through `Bower` by using the following command :

    bower install ng-onboard --save

## Use

**1.** Add ```ngOnboard``` to your app modules list.

**2.** Inject ```ngOnboard``` into a service or controller.

**3.** Define a tour with steps/options...

```javascript

var tour = {
    maskExit: true,
    steps: [{
            selector: '#step1',
            onboard: 'This is the first step!',
            options: {
                before: function() {
                    doSomethingBeforeThisStep();
                },
                delay: 4000 // 4 seconds to do the "before" function
            }
        }, {
            selector: '#step2',
            onboard: 'Hello second step.',
        }, {
            selector: '#step3',
            onboard: 'Almost Done....',
        }, {
            selector: '#step4',
            onboard: 'You made it!',
            options: {
            	after: function(){
            		doSomethingAfterThisStepLoads()
            	}
        	}
        }
    ]
};

```

**4.** Start the tour on a high level element...

```javascript
ngOnboard.start('body', tour);
```

**5.** Force the next/previous step...

```javascript
ngOnboard.next();
ngOnboard.previous();
```

**6.** Force the next step...

```javascript
ngOnboard.gotoStep(3);
```

**7.** Stop the tour prematurely...

```javascript
ngOnboard.stop();
```



scrollBox: '#view',


## License

As with onboard.js, this is under the [MIT license](https://github.com/tannerlinsley/ng-onboard/blob/master/LICENSE).






