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
   -> 使用 tsNode ： npm install ts-node -g
   -> npm install tslib @types/node -g
   -> 查看 ： ts-node 文件名

### 5.变量的声明

> 声明的类型 --> 类型注解（Type Annotation）
> vat/let/const 标识符：数据类型 = 赋值；
> 声明了类型后，ts 会进行类型检测

### 6.变量的类型推导---infer

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

> 运算之后会转成 boolean 也行 -> 100 > 20

#### Array

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

#### any

> 在某些情况下，无法确定一个变量的类型，并且它可能动态发生变化时
> => 不限制标识符的任意类型
> 应用场景：引入第三方库时，缺失类型注解

#### unknow

> 用于描述类型不确定的变量
> 和 any 的区别：unknown 类型的值上做任何事情都是不合法的

#### void

> 用来指定一个函数是没有返回值的，那么它的返回值就是 void 类型
> 也可以返回 undefined --> 默认函数就是返回 undefined
> 注意： 函数本身就是对象

```
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
> 应用场景：函数的返回值有多个时

## Ts 的语法细节

### 联合类型

> Ts 允许使用多种运算符，从现有类型中构建新类型

#### 1.Union Type 联合类型 |

> 联合类型是由两个或者多个其他类型组成的类型
> 表示可以时这些类型中的任何一个值
> 联合类型中的每一个类型被称之为联合成员 unions member

我们需要使用缩小 narrow 集合；使 ts 推断出更加具体的类型

#### 类型别名

> 用于类型注解的抽取和复用

```
type Mynumber = number

```

#### 接口 interface 的声明

> 对象的另一种声明方式就是通过接口来声明
> 以声明的方式：关键字 + 名称
> 接口和类型别名的区别
> 1：在定义对象类型时，可以任意选择
> 2：type > 接口
> 3：type 不可重复声明, interface 可以继承
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
