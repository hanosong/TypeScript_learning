/** 参数的类型*/
// function sum (num1:number, num2:number) {
//     return num1 + num2
// }

/** 返回值的类型 --> 可以推导出来，也可以指定*/
// function sum (num1:number, num2:number): number {
//     return num1 + num2
// }
// const res = sum(1,3) // 如果没指定， 则这里会自动进行类型推导


/** 定义对象类型*/
type LyricType = {
    time: number
    text: string
}
// 返回类型为LyricType[]
const parseLyric = (lyric: string):LyricType[] => {
    const lyrics: LyricType[] = [];
    lyrics.push({time: 12, text: '12'})
    return lyrics
}
const lyricInfos = parseLyric('121')
for (const item of lyricInfos){
    console.log(item.text,item.text)
}


/** 匿名函数的参数类型*/
const names = ['abc', 'cab', 'nba'];

// 作为参数的匿名函数，最好不要加类型注解 --> 通过上下文，类型已经被决定了，手动添加可能出错
// 上下文类型 contextual typing --> 根据函数执行的上下文可以帮助确定参数和返回值的类型
// 错误做法：item:string, index:number, arr:string[]
names.forEach(function(item, index, arr){

})
export {}