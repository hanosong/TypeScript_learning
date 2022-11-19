// 保存我的信息： haha 19 1.99
// 1.使用数组  --> 不合适，数组中最好存放相同的数据类型；获取值之后不能明确的知道对应的数据类型
const info1 : any[] = ['haha', 19,1.99]

// 2.使用对象 --> 唯一缺点，需要对应的key
const info2 = {
    name:'haha',
    age: 19,
    height: 1.99
}

// 3.元组类型 ---> 封装useState
const info3:[string,number,number] = ['haha', 19,1.99] 

function useState (initialState: number) :[number,(newValue:number) => void]{
    let stateValue = initialState;
    function setValue (newValue: any){
        stateValue = newValue
        // 重新渲染组件
    }
    return [ stateValue, setValue]
}   

const [count,setCount] = useState (10)
export {}