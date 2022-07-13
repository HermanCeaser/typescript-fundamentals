"use strict";
function parseCoordinate(arg1, arg2) {
    let coord = { x: 0, y: 0 };
    if (typeof arg1 === 'string') {
        arg1.split(',').forEach(function (str) {
            const [key, value] = str.split(':');
            coord[key] = parseInt(value);
        });
        return coord;
    }
    else if (typeof arg1 === 'object') {
        return coord = Object.assign({}, arg1);
    }
    else {
        return coord = { x: arg1, y: arg2 };
    }
}
console.log(parseCoordinate("x:12,y:24"));
console.log(parseCoordinate({ x: 10, y: 25 }));
console.log(parseCoordinate(1, 2));
