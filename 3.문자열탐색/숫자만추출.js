function solution(str) {
  /*
     문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만 듭니다.
     만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.
     추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
     */
  let num = /[^0-9]/g; // 숫자를 제외한 것들
  str = str.replace(num, ""); // 숫자를 제외하고 지운다.
  return parseInt(str.replace(num, "")[0]) === 0 // 0부터 시작하는 자연수는 없으니 0번쨰 인덱스가 0이라면 잘라준다.
    ? parseInt([...str].slice(1).join(""))
    : parseInt(str.replace(num, ""));
}

let str = "1g0en2T0s8eSoft";
console.log(solution(str));
