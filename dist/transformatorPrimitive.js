/**
 * Created by mac on 27.01.17.
 */
var PrimitiveValidator = require('nodejs.validator').primitive;


//local functions


var removeNonAlphaNumericChars = function (payload) {
    var local = !PrimitiveValidator.isNull(payload) && !PrimitiveValidator.isUndefined(payload) ? payload.toString() : '';

    /**
     * Ә   ә    &#1240;   &#1241;    \u04D8   \u04D9
     * Ұ   ұ    &#1200;   &#1201;    \u04B0   \u04B1
     * І   і    &#1030;   &#1110;    \u0406   \u0456
     * Ң   ң    &#1186;   &#1187;    \u04A2   \u04A3
     * Ғ   ғ    &#1170;   &#1171;    \u0492   \u0493
     * Ү   ү    &#1198;   &#1199;    \u04AE   \u04AF
     * Қ   қ    &#1178;   &#1179;    \u049A   \u049B
     * Ө   ө    &#1256;   &#1257;    \u04E8   \u04E9
     * Һ   һ    &#1210;   &#1211;    \u04BA   \u04BB
     */

    local = local.replace(/[^а-яА-Яa-zA-Z0-9\u04D8\u04D9\u04B0\u04B1\u0406\u0456\u04A2\u04A3\u0492\u0493\u04AE\u04AF\u049A\u049B\u04E8\u04E9\u04BA\u04BB]/g, '');
    return local;
};

var replaceNonAlphaNumericSpaceChars = function (payload) {
    var local = !PrimitiveValidator.isNull(payload) && !PrimitiveValidator.isUndefined(payload) ? payload.toString() : '';

    /**
     * Ә   ә    &#1240;   &#1241;    \u04D8   \u04D9
     * Ұ   ұ    &#1200;   &#1201;    \u04B0   \u04B1
     * І   і    &#1030;   &#1110;    \u0406   \u0456
     * Ң   ң    &#1186;   &#1187;    \u04A2   \u04A3
     * Ғ   ғ    &#1170;   &#1171;    \u0492   \u0493
     * Ү   ү    &#1198;   &#1199;    \u04AE   \u04AF
     * Қ   қ    &#1178;   &#1179;    \u049A   \u049B
     * Ө   ө    &#1256;   &#1257;    \u04E8   \u04E9
     * Һ   һ    &#1210;   &#1211;    \u04BA   \u04BB
     */

    local = local.replace(/[^а-яА-Яa-zA-Z0-9\s\u04D8\u04D9\u04B0\u04B1\u0406\u0456\u04A2\u04A3\u0492\u0493\u04AE\u04AF\u049A\u049B\u04E8\u04E9\u04BA\u04BB]/g, '_');
    return local;
};

var roundNumber = function (payload, precision) {

    payload = PrimitiveValidator.isStrictNumber(payload) ? payload : 0;

    precision = PrimitiveValidator.isStrictNumber(precision) && precision == parseInt(precision) ? precision : 2;

    var precision_base = Math.pow(10, precision);

    return Math.round(payload * precision_base) / precision_base;

};


//exported functions


module.exports.removeNonAlphaNumericChars = function (payload) {
    return removeNonAlphaNumericChars(payload);
};

module.exports.replaceNonAlphaNumericSpaceChars = function (payload) {
    return replaceNonAlphaNumericSpaceChars(payload);
};

module.exports.roundNumber = function (payload, precision) {
    return roundNumber(payload, precision);
};