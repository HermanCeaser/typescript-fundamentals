interface Coordinate {
    x: number,
    y: number
}
function parseCoordinate(options: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(input: string): Coordinate;
function parseCoordinate(arg1:unknown, arg2?: unknown): Coordinate {

    let coord: Coordinate = {x: 0, y: 0};

    if (typeof arg1 === 'string') {
        (arg1 as string).split(',').forEach(function (str) {
            const [key, value] = str.split(':');
            coord[key as 'x' | 'y'] = parseInt(value);
            
        });
        return coord;
    } else if (typeof arg1 === 'object') {
        return coord = { ...(arg1 as Coordinate) };
    } else {
        return coord = { x: arg1 as number, y: arg2 as number };
    }

    
    
}

console.log(parseCoordinate("x:12,y:24"));
console.log(parseCoordinate({x:10,y:25}));
console.log(parseCoordinate(1,2));