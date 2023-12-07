function solution(arr) {
  /*
    지도 정보가 N*N 격자판에 주어집니다.
    각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다.
    봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
    격자의 가장자리는 0으로 초기화 되었다고 가정한다.
    만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다. 

    키포인트
    상하좌우보다 크면 봉우리 판정.
    각 모서리 양쪽 인덱스 끝에 있는 요소들은 확인할 수 없는 방향잉 있는데, 이걸 조건문으로 처리하기에는 너무 코드가 더럽다.
    그냥 예제처럼 상하 좌우에 0을 채워주자 
    상 = [j-1][i]
    하 = [j+1][i]
    좌 = [j][i-1]
    우 = [j][i+1]
    이 네가지 값 중 최대값이 현재 요소보다 작으면 봉우리
    j = 0일 떈 상을 확인 안해도된다.
    j = arr.length-1 일땐 하를 확인안해도된다
    i = 0 일 땐 좌를 확인 안해도된다.
    i = arr.length-1 일땐 우를 확인안해도된다
     */
  let answer = 0;
  let result = arr;
  const x = [1, 2, 3, 4];
  arr.unshift([0, 0, 0, 0, 0]);
  arr.push([0, 0, 0, 0, 0]);
  arr = arr.map((el) => {
    el.push(0);
    el.unshift(0);
  });
  for (let i = 1; i < result.length - 1; i++) {
    for (let j = 1; j < result.length - 1; j++) {
      let max = Math.max(
        result[i - 1][j],
        result[i + 1][j],
        result[i][j - 1],
        result[i][j + 1]
      );

      if (max < result[i][j]) {
        answer++;
      }
    }
  }
  x[0] = 5;
  return x;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
