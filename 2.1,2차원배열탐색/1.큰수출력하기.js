function solution(arr) {
  /*
   *N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.(첫 번째 수는 무조건 출력한다)

   키포인트
   자신의 바로 앞 수보다 큰 수만 << 이부분이 헷갈렸다.
   앞이 다음 인덱스를 말하는건지, 이전인덱스를 말하는건지에서 혼선이있었다

   단순하게 현재요소의 이전인덱스보다 큰 요소만 출력하면 된다.
   */
  let answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
