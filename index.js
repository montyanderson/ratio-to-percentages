module.exports = function(values) {
    var total = 0;

    values.forEach(function(ratio) {
        total += ratio;
    });

    var percentages = [];

    values.forEach(function(ratio, key) {
        var percentage = (ratio / total) * 100;
        percentages[key] = percentage;
    });

    return percentages;
};
