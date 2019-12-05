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
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
	var count = [0,0,0]
	//ws.write(arr.join(' '))
	for (var val in arr){
		//ws.write(val + '\n')
		if (arr[val] > 0){
			count[0]++
		}else if(arr[val] < 0){
			count[1]++
		}else if(arr[val] == 0){
			count[2]++
		}
    }
    var result = [0, 0, 0]
    for (var i = 0; i < count.length; i++) {
        result[i] = count[i]/n
    }
	for (var i = 0; i < result.length; i++){
	    ws.write(result[i] + '\n');
	}
	// ws.write("counts")
	// for (var i = 0; i < count.length; i++){
	//     ws.write(count[i] + '\n');
	// }
	    ws.end();

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr, n);



}
