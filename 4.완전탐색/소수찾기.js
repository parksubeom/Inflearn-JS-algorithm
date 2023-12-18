// 소수판별
function isPrime(num) {
  if (num === 1 || num === 0) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
//
const getPermutations = (arr, num) => {
  const results = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
    const permutations = getPermutations(origin, num - 1);
    // 기준값(fixed)에 순열(permutations)을 붙인다.
    const attached = permutations.map((v) => [fixed, ...v]);
    // 붙인 값을 결과 값에 넣어준다.
    results.push(...attached);
  });

  return results;
};

const getAllPermutations = (arr) => {
  let results = [];
  arr.forEach((_, index, origin) => {
    results.push(...getPermutations(origin, index + 1));
  });

  return results;
};

function solution(numbers) {
  //넘버로 만들 수 있는 수의 경우의 수를 모두 배열에 담은다음, 배열을 순회하며 소수인지 판별하여 소수 라면 cnt ++ 해준다.
  let cnt = 0;
  let result = getAllPermutations([...numbers]).map((el) =>
    Number(el.map((x) => +x).join(""))
  );

  let filterarr = [...new Set(result)];

  filterarr.forEach((x) => {
    if (isPrime(Number(x))) {
      cnt++;
    }
  });
  return cnt;
}

console.log(solution("011"));
