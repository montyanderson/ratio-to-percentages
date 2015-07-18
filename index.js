module.exports = function(values) {
    var total = 0;

    values.forEach(function(ratio) {
        total += parseInt(ratio);
    });

    var percentages = [];

    values.forEach(function(ratio, key) {
        var percentage = (parseInt(ratio) / total) * 100;
        percentages[key] = percentage;
    });

    return percentages;
};
