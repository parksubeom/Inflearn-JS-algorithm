function solution(n, k, card) {
  /*
     card를 오른차순 정렬해준다.
     모든 3가지를 뽑았을 떄 모든 경우의수를 구해야한다.
     n가지 카드들 중 3장을 뽑은 값을 오름차순 정렬하고 그 중 k번째 수를 리턴해야한다.

     */
  let result = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        result.push(card[i] + card[j] + card[k]);
      }
    }
  }
  let answer = [...new Set(result)].sort((a, b) => b - a);
  return answer[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
