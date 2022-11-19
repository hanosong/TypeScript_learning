/** 对象类型和函数类型结合使用*/
// function prinCoordination(point:{x:number,y:number}){
//     console.log('x的坐标',point.x)
//     console.log('y的坐标', point.y)
// }

// 类型太长的时候，使用别名,
// type PointType = {x:number; y:number}
// function prinCoordination(point:PointType){
//     console.log('x的坐标',point.x)
//     console.log('y的坐标', point.y)
// }

// 可选属性
type PointType = {
    x:number
    y:number
    z?:string // ? 表示可选
}
export {}