function solution(a, b, c) {
  /*
     길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면
     이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
     삼각형 판별법 => 가장큰 변의 길이 와 나머지 두 변의 길이를 비교해서 가장 큰 변의 길이가 더 짧으면 삼각형, 아니면 삼각형이 될 수 없다.
     */
  let tryangle = [a, b, c];
  let maxangle = Math.max(...tryangle);
  let anther = tryangle.reduce((acc, cur) => acc + cur, 0) - maxangle;

  return maxangle < anther ? "YES" : "NO";
}

console.log(solution(40, 30, 25));
