function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  /*
     arr을 순회하면서 요소릴 뒤집어준다.
     뒤집은 수의 앞자리가 0일경우 0을 지워준다. 
     */
  arr
    .map((el) => [...el.toString()].reverse().map((el) => +el))
    .forEach((x) => {
      if (isPrime(Number(x.join("")))) {
        console.log(Number(x.join("")));
      }
    });
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
