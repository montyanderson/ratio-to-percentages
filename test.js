var rtp = require(__dirname);

var inputs = [
    [50, 50, 50, 50],
    [1.5, 1.5, 1.5, 1.5]
];

var outputs = [
    [25, 25, 25, 25],
    [25, 25, 25, 25]
];

inputs.forEach(function(input, key) {
    var output = outputs[key];

    if(rtp(input).join() == output.join()) {
        console.log("Passed: " + input + " === " + output);
    } else {
        console.log("Failed: " + input + " === " + rtp(input) + " !== " + output);
        process.exit(1);
    }
});
