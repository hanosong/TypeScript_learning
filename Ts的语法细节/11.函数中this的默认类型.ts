// 1.对象属性中函数的this

const o = {
    name: 'haha',
    playing(){
        console.log(this.name)
    }
}

o.playing()

// 函数的第一个参数作为this的类型
function foo (this: {name: string}){
    console.log(this)
}
foo.call({name: 'aha'});