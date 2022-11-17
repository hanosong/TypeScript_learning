### 1. 语法基础

#### 1. JS 的类型缺失

> 在编写阶段无法发现错误

```js
// 包装类型
123.length  // Ucaught SyntaxError

const num = 123;
num.length // undefined => 包装类型， 搞了一个空对象
```

#### 2. why TS

> 因为错误应该发现的越早越好 -> 编写> 的时候就进行校验

对传参进行限制，方便使用别人的类库的时候，在运行期间才发现错误，防止项目崩溃

对别人传入的参数进行验证，保证代码的健壮性

如果没有类型约束：只能靠逻辑去理解函数的传参，返回值是什么类型，缺少类型锲约无法开发大型项目

#### 3.js 添加类型约束的历史

1. 2014 年， Facebook -> flow -> vue2 源码采用

2. 2014 年， Micrsoft -> TS -> vue3

#### 4.whats TS

> Ts 是拥有类型的 JS 的超集，它可以编译成普通，干净，完整的 js 代码
> 在语言层面上:

1. 增加了语法的扩展 => 枚举类型（Enum），元组类型（Tuple）

2. 编译 -> babel / TSC
   -> 使用 tsNode ： npm install ts-node -g
   -> npm install tslib @types/node -g
   -> 查看 ： ts-node 文件名

#### 5.变量的声明

> 声明的类型 --> 类型注解（Type Annotation）
> vat/let/const 标识符：数据类型 = 赋值；
> 声明了类型后，ts 会进行类型检测

#### 6.变量的类型推导---infer

> 不写数据类型，由 ts 自动推导

### number 类型

> 不区分整数 int 和 浮点型 double
> es6 新增了 2 进制和 8 进制

```
num = 100 ; 10
num = 0b110; 2 -> 0b开头
num = 0o555; 8 -> 0o开头
num = 0xf23; 16
```

### boolean

> 运算之后会转成 boolean 也行 -> 100 > 20

### Array
