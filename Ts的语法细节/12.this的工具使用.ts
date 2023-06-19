function foo (this: {name: string}){
    console.log(this)
}

// 手动编写类型
// type FooType = (this: {name: string}) => void

// 获取this的类型
// 1. 获取foo的类型
type FooType = typeof foo;
// 2. ThisParameterType -- 获取FooType类型中this的类型
type FooThisType = ThisParameterType<FooType>
foo.call({name: 'aha'});

// 删除this类型
//1.OmitThisParameter:  删除一个函数类型Type的this参数类型，返回的是当前的函数类型
type PureFooType = OmitThisParameter<FooType>


// ThisType这个类型不返回一个转换过的类型，它被用于标记一个上下文的this类型 => 用于绑定上下文的this'
//1.ThisType
interface IState {
    name: string,
    age:number,
}

interface IStore {
    state: IState,
    eating: () => void,
    running: () => void
}

// & -- 使用交叉类型
//ThisType<IState> -- 把this绑定到IState上
//如果不使用ThisType；则需要在方法中手动绑定this的类型


const store: IStore & ThisType<IState> = {
    state: {
        name:"why",
        age: 18,
    },
    eating: () => {},
    running(/* this: IState */){
        console.log(this.name)
    }
}

export {}





export{}

