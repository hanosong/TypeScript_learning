
// void 可以省略不写
function sum(num1: number, num2: number):void{
    console.log(num1 + num2)
}
sum(1,2)

//  函数类型的表示方法
type LyricInfoType = { time: number, text: string}
// parseLyric函数的数据类型: (lyric:string) => LyricInfoType[]
function parseLyric(lyric:string):LyricInfoType[]{
    const lyricInfos:LyricInfoType[] = []
    return lyricInfos
}

// 举例
// 定义要求传入函数的类型
type ExecFnType = (...args:any[]) => void
// 定义一个函数，且接收的参数也是一个函数，并指定该函数的类型
function delayExecFun (fn:ExecFnType) {
    setTimeout(() => {
        fn('haha', 18)
    },100)
}
// 执行
delayExecFun((name,age) =>{
    console.log(name,age)
})
export {}