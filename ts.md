## 1. 语法基础

### 1. JS 的类型缺失

> 在编写阶段无法发现错误

```js
// 包装类型
123.length  // Ucaught SyntaxError

const num = 123;
num.length // undefined => 包装类型， 搞了一个空对象
```

### 2. why TS

> 因为错误应该发现的越早越好 -> 编写> 的时候就进行校验

对传参进行限制，方便使用别人的类库的时候，在运行期间才发现错误，防止项目崩溃

对别人传入的参数进行验证，保证代码的健壮性

如果没有类型约束：只能靠逻辑去理解函数的传参，返回值是什么类型，缺少类型锲约无法开发大型项目

### 3.js 添加类型约束的历史

1. 2014 年， Facebook -> flow -> vue2 源码采用

2. 2014 年， Micrsoft -> TS -> vue3

### 4.whats TS

> Ts 是拥有类型的 JS 的超集，它可以编译成普通，干净，完整的 js 代码
> 在语言层面上:

1. 增加了语法的扩展 => 枚举类型（Enum），元组类型（Tuple）

2. 编译 -> babel / TSC
> ts-node，可以更简单地编写和运行 TypeScript 代码。它在 Node.js 中动态地使用 TypeScript 编译器编译 TypeScript 代码，因此可以更快地编写和测试代码，而无需进行单独的编译步骤。
   -> 使用 tsNode ： npm install ts-node -g
   -> npm install tslib @types/node -g
   -> 查看 ： ts-node 文件名

### 5.变量的声明

> 声明的类型 --> 类型注解（Type Annotation）
> vat/let/const `标识符：数据类型 = 赋值；`
> 声明了类型后，ts 会进行类型检测

### 6.变量的类型推导---infer
~~~ts
let message = "hello" // 此时没有什么变量的类型
message = 3 // 报错：根据后面赋值内容的类型，自动推导出变量的类型

~~~
> 不写数据类型，由 ts 自动推导

#### number 类型

> 不区分整数 int 和 浮点型 double
> es6 新增了 2 进制和 8 进制

```
num = 100 ; 10
num = 0b110; 2 -> 0b开头
num = 0o555; 8 -> 0o开头
num = 0xf23; 16
```

#### boolean

> 运算之后会转成 boolean 也行 -> `100 > 20`

#### Array
两种写法：
> string[]
> Array<string>

#### object

#### symbol 类型

> es5 中， 不可以在对象中添加相同的属性名
> 如果有相同的属性名，可以用 symbel 来定义相同的名称，因为 Symbol 函数返回的是不同的值

```
const s1: symbol = Symbol('titlt')
const s2: symbol = Symbol('title')
const person = {
   [s1] : '程序员',
   [s2] : '老师',
}
```

#### null 和 undefined 类型

> null/undefined 既是自己的值，也是自己的类型

#### 函数的参数类型

> Ts 允许指定函数的参数和返回值的类型
> => 声明函数时，可在每个参数后面添加类型注解--->声明函数接收的参数类型
> => 添加返回值的类型注解 --> 在函数列表的后面
> 注意：当一个函数出现在 Ts 可以确定该函数会如何调用的地方时，该函数的参数会自动指定类型

```
// 一般不用写返回值类型，可自动推断
function sum(num1: number, num2: number): number {
   return num1 + num2
}
```
##### 匿名函数的参数
由函数执行的上下问可以帮助确定参数和返回值的类型 => 这个过程称之为：上下文类型--contextual typing
~~~ ts
const names = ["abc", "cba"];
names.forEach(item => {
   console.log(item.toUpperCase())
})
~~~

##### 函数的入参是一个对象时
* 属性之间可以用， 或者；分割
* 入参的最后一个分隔符可以省略
* 每个属性的类型部分也是可选的，如果不指定，则为any类型
* 如果对象中的某个属性是可选的，则在属性的后面加 ？
~~~ts
const fn = (person:{age: number, name: string, fav?: string}) => {
    console.log(person.age); // 28
    if(person.fav){ // 可选属性
      console.log(person.fav)
    }
}

fn({age: 28, name: 'haha'})
~~~

#### any

> 在某些情况下，无法确定一个变量的类型，并且它可能动态发生变化时
> 类似于Dart语言中的dynamic类型
> => 不限制标识符的任意类型
> 应用场景：引入第三方库时，缺失类型注解

#### unknow

> 用于描述类型不确定的变量
> 和 any 的区别：unknown 类型的值上做任何事情都是不合法的

#### void

> 用来指定一个函数是没有返回值的，那么它的返回值就是 void 类型
> 也可以返回 undefined --> 默认函数就是返回 undefined
> 注意： 函数本身就是对象
> 当基于上下文的类型推导（contextual typing）推导返回类型为void时，并不会强制函数一定不能返回内容

```ts
// foo -> 标识符
// () => void: () 函数，没有参数； void：返回值是void类型
const foo:() => void = () => {}

type FooType = () => void; // 别名写法
const foo: FooType = () => {}
```

##### void 类型没有明确的要求

> 当基于上下文的类型推导，推导出返回值的类型是 void 时，并不强制函数一定不能返回内容

举例：forEach 如果 return 有值的话，并不会报错---> 因为返回值的类型是推导出来的，并不是指定的

#### never

> 开发框架/封装工具时用
> 封装类型工具的时候用 -> 类型体操
> 表示永远不会发生值的类型 -> 函数抛出异常或者陷入死循环时

#### tuple 元组类型 -> python 里面有

> 元组数据结构中可以存放不同的数据类型，取出来的 item 也是有明确的类型的 --> 根据索引值取到的值可以确定对应的类型
> python，swift中也有元组类型
> 应用场景：函数的返回值有多个时
~~~ts
const arr: [string, number, number] = ["haha", 18, 188];
const item1 = arr[0]; // "haha",并且知道类型是string类型
~~~
* tuple和arr的区别
   * 1.数组中通常建议存放相同类型的元素，不同类型的元素推荐使用对象或者元组
   * 2.元组中的每个元素都有自己的特性的类型，根据索引值获取到的值可以确定对应的类型
## Ts 的语法细节

### 联合类型

> Ts 允许使用多种运算符，从**现有类型中构建新类型**

#### 1.Union Type 联合类型 |

> 联合类型是由两个或者多个其他类型组成的类型
> 表示可以时这些类型中的任何一个值
> 联合类型中的每一个类型被称之为联合成员 unions member

用联合类型申明变量或者入参很简单，但是在使用的时候，我们需要使用缩小 narrow 集合；使 ts 推断出更加具体的类型 
=> ts可以根据我们缩小的代码结构，推断出更加具体的类型
~~~ts

~~~

#### 类型别名
* 声明一个对象的类型，有两种方式：1.type； 2.interface
> 用于类型注解的抽取和复用

```ts
type Mynumber = number | string;
type Point = {x:number, y:number};
const fn = (id: Mynumber) => {}
```

#### 接口 interface 的声明

> 对象的另一种声明方式就是通过接口来声明
> 以声明的方式：关键字 + 名称
> 接口和类型别名的区别
> 1：在定义对象类型时，可以任意选择
> 如果是定义非对象类型，通常推荐使用type，比如Direction、Alignment、一些Function；
> 2：type > 接口
> 3：type(别名) 不可重复声明, interface 可以继承
> 4：interface 可以被类实现--ts 的面向对象

```
// interface支持继承
interface IPerson {
   name: string
   age: number
}
interface Ikun extends IPerson{ // 继承--接口复用
   hobby：array
}

// 被类实现
class Person implement  IPerson {
   //必须满足IPerson的条件
}
```

##### 小结

如果是非对象类型的定义使用 type，如果时对象类型的声明使用 interface

### 交叉类型 &

> 多种类型同时满足 --> 多用于对象类型
~~~ts
interface Colorful { color: string}
interface IRun {running: () => void}
type NewType = Colorful & IRun; // 交叉类型
const obj: NewType = {
   color: 'red',
   running: function () {}
}
~~~

#### 类型断言as
> type assertions
> 当ts无法获取具体的类型信息

#### 非空断言
> 当某些值可能是undefined的时候 => 但是我们自己能够确定一定是会有值的
> 使用！表示 => 确定某个标识符是有值得，可以跳过ts在编译阶段对它得检测

~~~ts
 const postMsg = (msg?: string) => {
   console.log(message!.toUpperCase()) // 如果不使用非空断言，则由于msg可能是undefined的原因，ts会报错
 }
~~~

#### 字面量类型
> literal types
> 将多个字面量类型联合在一起，用于枚举？
~~~ ts
type AlignType = 'left' | 'top' | 'center';
const changeAlign = (diraction: Align) => {};
changeAlign('left'); // 只能是'left' | 'top' | 'center'
~~~

##### 字面量推断
``` ts
const info = {url: 'xxx', methods: 'POST'}; //此时推断的info类型为{url：string, methods: string};

const request = (url: string, methods: 'POST' | 'GET' ) => {};
request(info.url, info.methods); // 会报错，因为没办法把一个string类型赋值给一个字面量类型
```

#### 类型缩小

