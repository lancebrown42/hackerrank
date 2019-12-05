'use strict';
const fs = require('fs');


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr, n) {
	var count = [0,0,0]
	for (val in arr){
		if (val > 0){
			count[0]++
		}else if(val < 0){
			count[1]++
		}else if(val == 0){
			count[2]++
		}
    }
    var result = [0, 0, 0]
    for (i in count) {
        result[i] = count[i]/n
    }
    ws.write(result.join(' ') + '\n');

    ws.end();

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    plusMinus(arr, n);



}
