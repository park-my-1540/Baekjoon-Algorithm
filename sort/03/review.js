/**
 * 나이순 정렬
 * 문제 
 *  알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
    길이가 짧은 것부터
    길이가 같으면 사전 순으로
    단, 중복된 단어는 하나만 남기고 제거해야 한다.
   
    문자열로 비교할땐 a-b 대신 -1로 하는구나!
 */
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const filePath = path.join(__dirname, 'example.txt');

const inputData = fs.readFileSync(filePath).toString().split('\n');
const length = Number(inputData[0]);
let array = [];
for(let i=1; i<=length; i++){
    array.push(inputData[i].toString());
}
array = [...new Set(array)];
const compare = (a,b) => {
    if(a.length !== b.length){
        return a.length - b.length;
    }else{
        if(a<b) return -1;
        else if(a>b) return 1;
        else return 0;
    }
}

array.sort(compare);

let answer = '';
for(let data of array){
    answer +=data + '\n';
}
console.log(answer);