// 明确指定数组的类型注解
// 1. string[]: 数组类型，并且数组中存放的字符串类型
// 2. Array<string> : 数组类型，并且数组中存放的是字符串类型
// 注意事项：在真实的开发中，数组一般存放相同的类型，不要存放不同的类型
let names = ['haha', 'hehe', 'hoho'];
let nums:Array<number> = [1,2,3]


export {}