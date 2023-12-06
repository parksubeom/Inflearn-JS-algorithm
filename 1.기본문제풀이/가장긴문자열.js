function solution(s) {
  return s[
    s.map((el) => el.length).indexOf(Math.max(...s.map((el) => el.length)))
  ];
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
