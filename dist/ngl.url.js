angular.module('ngl.url', [
    'ngl.fp' // nglReduce
])

.factory('nglInterpolate', function (nglReduce) {
    'use strict';

    var interpolate = function (template, params) {
        return nglReduce(function (acc, item, index) {
            return acc.replace(':' + index, item);
        }, template, params);
    };

    return interpolate;
})

.factory('nglQueryString', function (nglReduce) {
    'use strict';

    var queryString = function (object) {
        return nglReduce(function (acc, item, index) {
            return acc + (acc.length ? '&' : '?') + index + '=' + item;
        }, '', object);
    };

    return queryString;
});
