// 1.type类型使用的范围更广 ---> 接口只能用于声明对象
// 2.声明对象时，interface可以多次声明
type PointType = {
    x: number
    y: number
}
/** 
 * type不能重复声明---错误做法，不允许两个相同名称的别名同时存在
 * type PointType = {
    z: number
}
*/

// interface 多次声明
interface PointType2 {
    x: number
    y: number
}

interface PointType2 {
    z: number // 追加一个
}

// 两次声明的条件都要满足
const point: PointType2 = {
    x:1,
    y:2,
    z:3,
}
export {}
