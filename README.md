ng-onboard
================

An angularjs directive that wraps [onboard.js](https://github.com/nozzle/onboard.js).

## Bower

You can install this package through `Bower` by using the following command :

    bower install ng-onboard --save


## Working with the code

First, get the node modules needed (grunt, bower)

    npm install
    
Next, use bower to get the JS libraries needed (onboard.js)

    node_modules/.bin/bower install

Then, whenever you make any changes, get grunt to build the minified ng-onboard.min.js

    node_modules/.bin/grunt 

If you want to view the demo page to make sure everything's working, the quickest way is to start a web server

    python -m SimpleHTTPServer
    
And browse to `http://localhost:8000/example/index.html`   




## License

As with onboard.js, this is under the [MIT license](https://github.com/tannerlinsley/ng-onboard/blob/master/LICENSE).






