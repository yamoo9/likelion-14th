// --------------------------------------------------------------------------
// 📌 typeof 연산자 활용
// --------------------------------------------------------------------------

const o = {
  // key(string): value(any),
  'name': 'object', // string
  'serialNumber': 20250613, // number
  'isObjectType': () => true, // function -> boolean
  'isNotDefined': undefined, // undefined
  'empty': null, // null
  'symbol': Symbol('o'), // symbol
  'int': 100n, // bigint
}

// 어떤 데이터 타입인지 확인하고자 한다.
// typeof 연산자 (typeof 연산자로 null과 object를 구분할 수 없다)
// typeof 데이터 // 'string', 'number', 'boolean', ...

console.log(typeof o)
console.log(typeof o.name)
console.log(typeof o.serialNumber)
console.log(typeof o.isObjectType)
console.log(typeof o.isObjectType())
console.log(typeof o.isNotDefined)
console.log(typeof o.empty)
console.log(typeof o.symbol)
console.log(typeof o.int)

