const o = {
  a: 'a',
  b: 'b',
  obj: {
    key: 'key',
  },
}
const o2 = o

o2.a = 'new value'

console.log(o.a)

// this shallow-copies o into o3
const o3 = Object.assign({}, o)

// deep copy
function deepCopy(obj) {
  const keys = Object.keys(obj)

  const newObject = {}

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (typeof obj[key] === 'object') {
      newObject[key] = deepCopy(obj[key])
    } else {
      newObject[key] = obj[key]
    }
  } 

  return newObject
}

const o4 = deepCopy(o)

o.obj.key = 'new key!'
console.log(o4.obj.key)

// string to Upper and comeback
const str = "String"
str.toLocaleUpperCase()
str.toLocaleLowerCase()


///----- some difference between "var" and "let" 
  for (var i = 0; i < 5; i++) {
    console.log("in (var) i = " + i)
  }
console.log("out (var) i = " + i)

  for (let k = 0; k < 5; k++) {
    console.log("in (var) k =" + k)
  }
console.log("out (var) k = " + k)// error :)

///--- прекрасный пример закрытости 
function makeHelloFunction() {
  var message = 'Hello!'
  function sayHello() {
    console.log(message)
  }
  return sayHello
}
const sayHello = makeHelloFunction()
// здесь переменной message еще не существует
console.log('typeof message:', typeof message)
//но функция sayHello может может вызывать переменную message
console.log(sayHello.toString())
//
sayHello()
