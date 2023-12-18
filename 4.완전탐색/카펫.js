function solution(brown, yellow) {
  /*
     규칙찾는게 중요.
     브라운 + 옐로우 === 두격자의 합의 약수들 중 하나.
     가로길이는 세로보다 크거나 같다.
     즉 옆으로 누운 직사각형이여야한다

     */
  let sum = brown + yellow;
  let 약수 = [];

  for (let i = 0; i <= Math.floor(Math.sqrt(sum)); i++) {
    if (sum % i === 0) {
      약수.push([i, sum / i]);
    }
  }
  return 약수;
}
console.log(solution(24, 24));
