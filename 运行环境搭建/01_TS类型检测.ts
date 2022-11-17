// |  -> 联合类型； 
// string[] -> 数组元素类型为字符串

function getLength (args:string | string[]) {
    return args.length
}

getLength('232')
getLength(['1','2'])

function getLength_2 (args: {length : number}){
    return args.length
}

getLength_2('232') // 字符串是包装类型， 也会转化成对象
getLength_2({length: 100})