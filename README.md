# ratio-to-percentages

[![NPM Version](https://img.shields.io/npm/v/ratio-to-percentages.svg)](https://www.npmjs.com/package/ratio-to-percentages)
[![Build Status](https://travis-ci.org/montyanderson/ratio-to-percentages.svg)](https://travis-ci.org/montyanderson/ratio-to-percentages)

A very tiny NPM module for converting a multiple value ratio to an array of percentages.

``` javascript
var rtp = require("ratio-to-percentages");

console.log(rtp([100, 50, 50]));
// [ 50, 25, 25 ]

console.log(rtp([44.1, 88.2])
// [ 33.33333333333333, 66.66666666666666 ]
```
