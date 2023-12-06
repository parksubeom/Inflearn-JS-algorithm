function solution(s) {
  let answer = new Set([...s]);
  return [...answer].forEach((el) => {
    console.log(el);
  });
}
let str = ["good", "time", "good", "time", "student"];
solution(str);
