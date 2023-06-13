
// 使用instanceOf进行类型缩小
function printDate (date: string| Date) {
    if(date instanceof Date) {
        // 判断date是不是Date的实例
        console.log(date.getTime());
    }else{
        console.log(date, 'string')
    }
}

// 使用in操作符，判断是否有某一个属性
interface ISwim {
    swim: () => void
}

interface IRun {
    run: () => void
}

function move (animal: ISwim | IRun) {
    // 判断animal中有没有这个属性
    if( "swim" in animal) {
        animal.swim()
    }else if("run" in animal){
        animal.run()
    }
}


const fish: ISwim = {
    swim: function () {}
}
const dog: IRun = {
    run: function () {}
}

move(fish)