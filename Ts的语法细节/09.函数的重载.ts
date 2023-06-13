// step1. 先编写重载签名
function add (arg1: number, arg2: number): number; // 不需要函数的实现体
function add (arg1: string, arg2: string): string // 不需要函数的实现体
// step2. 编写通用的函数实现

function add(arg1: any, arg2: any): any{
    return arg1 + arg2
}


add("aa", "bb")
add(1, 2)
// add(1, 'aaa') // 没有匹配的重载签名，会报错