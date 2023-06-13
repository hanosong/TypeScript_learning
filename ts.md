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

// 解决方案
// 方案1：使用类型断言，将info.methods的类型转为转为更加细节的类型
request(info.url, info.methods as "POST"); 

```

#### 类型缩小
> Type Narrowing , 类型缩窄
> 使用类似`typeof padding === "number"` 的判断语句来缩小TS的执行路径
> 在给定的执行路径中，通过缩小比声明时更小的类型，这个过程叫缩小（Narrowing）
> `typeof padding === "number"`称之为类型保护(type guards)

* 常见的几种类型保护
   - typeof 
   - 平等缩小 ( === , !==)
   - instanceof => 是不是某个东西的实例
   - in => 用于确定对象是否具有带名称的属性
   如果指定的属性在指定的对象或者其原型链中，则in运算符返回true

   - etc...

##### 使用typeof进行类型缩小
> 因为TS对如何 typeof操作不同的值进行编码

##### 平等缩小
> 通过switch或者相等的一些运算符来表达相等性 (比如 ===, !==, == , !=)

## 函数的类型
函数名本身也是一个标识符，也应该有自己的类型
函数是一等公民 => 函数可以作为参数，也可以作为返回值进行传递

### 函数类型的表示
1. 通过编写函数类型表达式（Function Type Expressions）来表示函数类型
```ts
// 方案1：函数类型表达式
// 格式：（参数列表） => 返回值
// num1: 形参 -- 不能省略，不然就会变成number: any(名字number ，type为any)
const bar: (num1:number) => number = (arg: number): number => {
   return 123
}

// 优化: 使用别名
type BarType = (num1:number) => number ;
const bar: BarType = (arg: number) :number => {return 123}
```

如果回调是函数，且你打算传入一个匿名函数的时候，让它自己进行类型推导，不用手动写类型
```ts
// 回调是匿名函数
calc(function(num1, num2){
   return num1 + num2
})
```
#### 函数类型参数的格式问题
> ts对于传入的函数类型的参数个数不进行类型检测
> 不需要把可能不传入的形参写成可选参数的形式
错误做法：`(num1?: number)`,不需要`?`
```ts
type CalcType = (num1: number, num2: number) => number
function calc (calcFn: CalcType){
   calcFn(10,20) // 入参必须符合参数规则
};

// 回调中并不检测参数的个数，这里不传都行
calc(function(/* num1, num2 */){
   return 23
})
```

* Ts对于很多类型的检测报不报错，取决于它内部的规则
```ts
interface IPerson {
   name: string,
   age: number
}

// 如果把这个对象不通过p，直接赋值，会报错(ts会检测新鲜的东西)
const p = {
   name: "haha",
   age: 15,
   fav: "basketball"
}

// 赋值给p，p再赋值给info，不报错
const info:IPerson = p;
```

### 函数类型-调用签名 Call Signatures
> 在js中，函数除了可以被调用，自己也是可以有属性值的
> 然而前面讲到的函数类型表达式并不能支持声明属性
>如果想要描述一个带有属性的函数，可以在一个对象类型中写一个调用签名

```ts
const bar: any = (num1: number) :number => {
   return 2
}

// 1. 函数类型表达式：局限性：只能表达出这个是个函数，无法表达出其他属性
type BarType = (num1: numbere) => number
const bar: BarType (num1: number) :number => {
   return 2
}

//2. 函数的调用前面(从对象的角度来看待这个函数，也可以有其他属性)
interface IBar {
   name: string
   age: number
   // 函数可以调用：函数调用签名
   // (参数列表): 返回值类型
   (num1: number): number
}
const bar: IBar = (num1: numbr) : number => {
   return 123
}
// 不报错
bar.name = "aaa"
bar.age = 19
bar(123)
```

* 开发中该如选择呢？
   - 1. 如果只是描述函数*类型本身（函数可以被调用），使用函数类型表达式
   - 2. 如果在描述函数作为对象可以被调用，同时又有其他属性时，使用函数签名

### 构造签名 Construct Signatures
JS函数也可以使用new操作符调用，当被调用时，TS会认为这是一个构造函数（consturctors）因为他们会产生一个新对象
   * 可以写一个构造签名，方法是在调用签名前面加一个new关键字


### 函数的可选参数
> ?:
> 可选参数的类型是什么？ => number | undefined 这两个的联合类型
> 可选类型的参数必须放在必传参数的后面
```ts
function foo (x: number,y?: number){
   // 如果使用y，则需要类型缩小
   if(y !== undefined){// do some thing about y}
}
```
### 函数的参数默认值
> 1.有默认值的情况下，参数的类型注解可以省略
> y的入参可以是undefined，不会报错 => 所以这个参数可以不传
```ts
function foo (x: number,y = 100){
   
}
```

### 函数的剩余参数
> 从ES6开始，JS也支持剩余参数，剩余参数语法允许我们将一个不定数量的参数放到一个数组中。

```ts
function sum(...nums:number[]){
   let total = 0;
   for (const num of nums) {
      total += num;
   }
   return total
}
const res1 = sum(1,2,3)
```

### 函数的重载
> 场景：如果编写了一个add函数，希望可以对字符串和数字进行相加
> 在TS中，我们可以去编写不同的重载签名（overload signatures）来表示函数可以以不同的方式进行调用
> 一般是编写两个或两个以上的重载签名，再去编写一个通用的函数以及实现

1. 编写重载签名
2. 编写通用函数
3. 注意：有是实现体的函数，是不能被直接调用的

#### 联合类型和重载的功能耦合，该怎么选择？
* 优先使用联合类型

### 可推到的this类型
> Vue3和react中比较少用this
## 其他

为什么要在下面 `export {}`?
因为，要增加一个作用域，不然文件和文件之间的变量重名会报错