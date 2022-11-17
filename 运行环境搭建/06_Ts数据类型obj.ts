type InfoType = {
    name: string
    age: number
}

// 写法1
let info:{
    name: string
    age: number
    // 如果这里还有一个属性，则下面也必须有该属性
} = {
    name: 'haha',
    age:18
}

// 写法2
let _info: InfoType = {
    name: 'haha',
    age:18
}

// 错误写法---object是一个通用类型{}，需要明确指定内部有哪些属性
let _tem:object = {
    name: 'haha',
    age:18
}
export {}