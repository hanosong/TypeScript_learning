interface PointType {
    x: number
    y?: number
}

// 使用
function consolePointType(point:PointType ){
    console.log(point)
}
consolePointType(
    {
        x: 1,
        y:2
    }
)

export {}