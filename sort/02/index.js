/**
 * 좌표 정렬하기
 * 문제 : 2차원 평면 위의 점 N개가 주어진다. 좌표를 y좌표가 증가하는 순으로, y좌표가 같으면 x좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.
 * 입력 : 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. 
 *      (-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.
 * 출력 : 첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.
 * 
5
0 4
1 2
1 -1
2 2
3 3

1 -1
1 2
2 2
3 3
0 4
 * 
 * 
 */
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const filePath = path.join(__dirname, 'example.txt');

const inputData = fs.readFileSync(filePath).toString().split('\n');
const length = Number(inputData[0]);

let array = [];
for(let i=1; i<=length; i++){
    const [x,y] = inputData[i].split(' ').map(Number);
    array.push([x,y]);
}

const compare = (a,b) => {
    if(a[1] !== b[1]){ // y좌표가 달라영
        return a[1] - b[1];
    }else{
        return a[0] - b[0];
    }
}

array.sort(compare);
let answer = '';

for( item of array ){
    answer += `${item[0]} ${item[1]}\n`
}

console.log(answer)
