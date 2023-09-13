/**
 * 나이순 정렬
 * 문제 
 * 온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 
 * 이때,  회원들을 나이가 증가하는 순으로, 
 *       나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.
 */
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const filePath = path.join(__dirname, 'example.txt');

const inputData = fs.readFileSync(filePath).toString().split('\n');
const length = Number(inputData[0]);

let array=[];
for(let i=1; i<=length;i++){
    const [x,y] = inputData[i].split(' ');
    array.push( [Number(x), y] );
}
const compare = (a,b) => {
    if(a[0] !== b[0]){
        return a[0]-b[0]
    }else{
        return a[1]-b[1];
    }
}

array.sort(compare);
for(let data of array){
    console.log(data[0]+' '+ data[1]);
}