function solution(m, product) {
  /*
     할인은 상품에만 적용되므로 상품가격이 가장 비싼 선물에 할인쿠폰을 적용한다
     할인쿠폰이 적용된 선물리스트를 배송비+상품비용 을 합친 값으로 바꿔주고 오름차순 정렬한다.
     최대갯수를 구하는것이기에 저렴한순으로 사들이면 된다.
     할인쿠폰을 가장 가성비있게 사용한 상태에서ㅏ 배송비+상품비용을 합친상태로 정렬했기떄문에 다른걸 고려할 필요가 없다.
     박스에 상품을 담다가, 다음상품을 담으면 예산을 초과한다면 리턴한다.
     foreach는 리턴한다고 중지되지않기때문에 썸을통해 얼리리턴해줬다. 
     */
  let money = m;
  let box = 0;
  let cnt = 0;
  product.sort((a, b) => a[0] - b[0]);
  product[product.length - 1][0] = product[product.length - 1][0] / 2;
  product = product.map((el) => el.reduce((acc, cur) => acc + cur, 0));
  product = product.sort((a, b) => a - b);

  product.some((el) => {
    if (box + el > money) {
      return true;
    } else if (box === money) {
      return;
    }
    box += el;
    cnt++;
  });
  return cnt;
}

let arr = [
  [2, 2],
  [4, 3],
  [4, 6],
  [6, 6],
  [8, 3],
];
console.log(solution(28, arr));
