var rtp = require(__dirname);

var inputs = [
    [50, 50, 50, 50],
    [1.5, 1.5, 1.5, 1.5],
    ["50", "50", "50", "50"],
    [1, 1, 1]
];

var outputs = [
    [25, 25, 25, 25],
    [25, 25, 25, 25],
    [25, 25, 25, 25],
    [33, 33, 33]
];

inputs.forEach(function(input, key) {
    var output = outputs[key];

    if(rtp(input, Math.round).join() == output.join()) {
        console.log("Passed: " + input + " === " + output);
    } else {
        console.log("Failed: " + input + " === " + rtp(input, Math.round) + " !== " + output);
        process.exit(1);
    }
});
