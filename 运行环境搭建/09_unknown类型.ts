let foo:unknown = 'aaa'
foo = 123; // 可以赋值

// console.log(foo.length) any可以这样做，但是unknown不允许做操作--> 除非进行校验
if(typeof foo === 'string') { // 类型缩小
    console.log(foo.length)
}
export {}