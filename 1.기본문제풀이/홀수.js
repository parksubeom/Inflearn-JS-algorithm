function solution(arr) {
  /*
    7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
     */
  let answer = arr.filter((el) => el % 2 === 1); // 2로 나누었을 떄 나머지가 1이 남는 수는 홀수이므로 홀수들만 필터링해준다.

  console.log(answer.reduce((acc, cur) => acc + cur, 0)); //홀수들만 있는 배열의 요소들을 모두 더한 값을 구해주고,
  console.log(Math.min(...answer)); // 홀수들만 있는배열의 요소들 중 최솟값도 구해준다.
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
