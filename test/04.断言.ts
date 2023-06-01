// const elment = document.getElementById("myelement") as HTMLImageElement;
const myNum = ("haha" as unknown) as number; // 错误做法
console.log(typeof myNum); // string

// 非空断言
const postMsg = (msg?: string) => {
    console.log(msg!.toUpperCase())
}

postMsg()