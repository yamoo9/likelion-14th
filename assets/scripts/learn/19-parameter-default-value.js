// --------------------------------------------------------------------------
// 📌 함수 매개변수 기본값 설정 (조건문 활용)
// --------------------------------------------------------------------------

function getMoney(price, unit) {
  if (!unit) unit = '원'
  if (unit === '달러') return '$' + price
  return price + unit
}

let moneyKR = getMoney(5000 + 2000 + 1500 + 500) 
let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '달러') 

console.log(moneyKR)
console.log(moneyUS)