// 获取入参的长度

// 1.普通的实现
/* function getLength(arg){
    return arg.length
} */

// 2.使用函数的重载实现
/* function getLength(arg: string):number
function getLength(arg: any[]):number

function getLength (arg) {
    return arg.length
} */

// 3.使用联合类型实现
/* function getLength(arg: string | any[]){
    return arg.length
}
 */

// 4. 使用对象类型实现,只要入参具有length属性即可
function getLength (arg:{length: number}){
    return arg.length
}
getLength('aaa');
getLength([1,2,3])
