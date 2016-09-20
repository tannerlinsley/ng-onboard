This repository is currently unmaintained. If you would like to maintain it, please tweet me at @tannerlinsley.
================
ng-onboard
================

An angularjs directive that wraps [onboard.js](https://github.com/nozzle/onboard.js).

For a demo, please visit [onboard.js](https://github.com/nozzle/onboard.js/tree/master)

## Bower

You can install this package through `Bower` by using the following command :

    bower install ng-onboard --save

## Use

**1.** Add JS and CSS files to your project.

```html
<link href="onboard.css" rel="stylesheet">

<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="bower_components/onboardjs/onboard.js"></script>
<script src="bower_components/ng-onboard/ng-onboard.js"></script>
```

**2.** Add ```ngOnboard``` to your app modules list.

**3.** Inject ```ngOnboard``` into a service or controller.

**4.** Define a tour with steps/options...

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

**5.** Start the tour on a high level element...

```javascript
ngOnboard.start('body', tour);
```

**6.** Force the next/previous step...

```javascript
ngOnboard.next();
ngOnboard.previous();
```

**7.** Force the next step...

```javascript
ngOnboard.gotoStep(3);
```

**8.** Stop the tour prematurely...

```javascript
ngOnboard.stop();
```



scrollBox: '#view',


## License

As with onboard.js, this is under the [MIT license](https://github.com/tannerlinsley/ng-onboard/blob/master/LICENSE).






