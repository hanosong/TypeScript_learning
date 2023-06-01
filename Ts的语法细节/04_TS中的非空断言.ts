// 定义一个接口
interface IPerson {
    name: string,
    age: number,
    friends?: {
        name: string
    }
}

const info:IPerson = {
    name: "haha",
    age: 18
}

// 如果要访问的属性不一定存在
// 从访问属性的角度来看：使用可选链： ？.
console.log(info.friends?.name)

// 从赋值的角度来看：
// 方案1： 类型缩小
if(info.friends){
    info.friends.name = "hehe"
}

// 方案2：非空断言 => 与风险，需要确保一定有值
info.friends!.name = "huahua"