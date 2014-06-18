angular-guide.js [![Build Status](https://travis-ci.org/mendhak/angular-guide.js.svg?branch=master)](https://travis-ci.org/mendhak/angular-guide.js)
================

An angularjs directive that wraps [guide.js](https://github.com/Dozyatom/guide.js) functionality.

![angularguide](http://farm8.staticflickr.com/7382/9741892196_ccc16b8a16_o.png)

See [the project page](http://code.mendhak.com/angular-guide.js/) for an overview.

## Bower

You can install this package through `Bower` by using the following command :

    bower install angular-guide.js --save





## Working with the code

First, get the node modules needed (grunt, bower)

    npm install
    
Next, use bower to get the JS libraries needed (guide.js)

    node_modules/.bin/bower install

Then, whenever you make any changes, get grunt to build the minified angular-guide.min.js

    node_modules/.bin/grunt 

If you want to view the demo page to make sure everything's working, the quickest way is to start a web server

    python -m SimpleHTTPServer
    
And browse to `http://localhost:8000/example/index.html`   




## License

As with guide.js, this is under the [MIT license](https://github.com/mendhak/angular-guide.js/blob/master/LICENSE).






