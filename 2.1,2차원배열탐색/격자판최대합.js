function solution(arr) {
  /*
      
     */
  let reverse = arr.map((el) => el.slice().reverse());
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let 행의합 = 0;
    let 열의합 = 0;
    let 좌대각합 = 0;
    let 우대각합 = 0;
    sum = 0;
    for (let j = 0; j < arr.length; j++) {
      행의합 += arr[j][i];
      열의합 += arr[i][j];
      좌대각합 += arr[j][j];
      우대각합 += reverse[j][j];
      sum = Math.max(행의합, 열의합, 좌대각합, 우대각합);
    }
  }
  return x;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
