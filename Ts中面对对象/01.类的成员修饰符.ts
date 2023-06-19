class Person {
  protected name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // 只有在类的内部才能访问eating
  private eating(){
    console.log("eating", this.name)
  }
}

const p = new Person("haha", 20);

// 子类
class Student extends Person {
    constructor(name: string, age: number){
        super(name, age)
    }
    studying(){ // 由于protected修饰，子类可以访问
        console.log(this.name)
    }
}

const stu = new Student("haha", 222)
stu.studying()