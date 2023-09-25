/**
 * A+B - 4
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 * 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
 */


const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
const input = fs.readFileSync(filePath).toString().split('\n');

const length = input.length;


for( i=0; i<length; i++){
    let [x,y] = input[i].split(' ').map(Number);
    if(0<x && y<10){
        console.log(x+y);
    }
}
