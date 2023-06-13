class Person {}

// 使用函数签名
interface ICTORPerson {
    new () : Person // 可以通过new调用，返回值是Pserson；new表示这个东西是一个构造签名
}

function factory (fn: ICTORPerson) {
    const f = new fn();
    return f
}


factory(Person)