
// 如果声明一个标识符时，有直接对其赋值，则会根据赋值的类型推导出标识符的类型注解
// let 进行类型推导，推导出来的是通用类型
// const 进行类型推导， 推导出来的是字面量类型
let name = 'haha'

const height = 1.88 ; // --> const height: 1.88（1.88即为字面量类型） === const height: 1.88 = 1.88

export {}