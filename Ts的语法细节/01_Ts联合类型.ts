let foo:string | number = 'aaa'

// 使用的时候要小心
typeof foo === 'string' && console.log(foo.length)

const fn = (name:string, age?: number | string ): void => {
    console.log(name, )
}
fn('haha')
export {}