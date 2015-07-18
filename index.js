module.exports = function(values, func) {
    var total = 0;

    values.forEach(function(ratio) {
        total += parseInt(ratio);
    });

    var percentages = [];

    values.forEach(function(ratio, key) {
        var percentage = (parseInt(ratio) / total) * 100;

        if(func) {
            percentage = func(percentage);
        }

        percentages[key] = percentage;
    });

    return percentages;
};
