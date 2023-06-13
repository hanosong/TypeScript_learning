const printId = (id: number | string) => {
  if (typeof id === "string") {
    // ts会对这个代码块进行类型验证，确保这里一定是字符串
    console.log(id.length);
  } else {
    console.log(id);
  }
};

// 2. 方向类型的判断
type Dir = "left" | "right" | "up"
function switchDir(dir: Dir) {
    if(dir === "left"){
        console.log(dir, "向左移动")
    }
}