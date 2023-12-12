function solution(n, arr) {
  let maxarr = arr.map((el) =>
    [...el.toString()].map((x) => +x).reduce((acc, cur) => acc + cur, 0)
  );
  let result = [];
  maxarr.forEach((el, idx) => {
    if (maxarr.lastIndexOf(Math.max(...maxarr), idx) === -1) {
      result = result;
    } else if (
      result.indexOf(maxarr.lastIndexOf(Math.max(...maxarr), idx)) === -1
    ) {
      result.push(maxarr.lastIndexOf(Math.max(...maxarr), idx));
    }
  });

  return Math.max(...result.map((el) => arr[el]));
}

let arr = [128, 460, 603, 342, 521, 137, 173];
console.log(solution(7, arr));
