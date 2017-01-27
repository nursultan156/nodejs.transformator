/**
 * Created by mac on 27.01.17.
 */

var PrimitiveTransformator = require('./../dist/transformatorPrimitive');

console.log(PrimitiveTransformator.roundNumber(123.123));
console.log(PrimitiveTransformator.roundNumber(123.123, 4));
console.log(PrimitiveTransformator.roundNumber(123.123, 2));
console.log(PrimitiveTransformator.roundNumber(123.123, -2));
console.log(PrimitiveTransformator.roundNumber('123.56', -2));