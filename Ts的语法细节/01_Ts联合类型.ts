let foo: string | number = 'aaa'

// 使用的时候要小心
typeof foo === 'string' && console.log(foo.length)

export {}