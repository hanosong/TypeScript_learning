const obj: object = {
    name: "haha",
    age: 18
}

obj['name'] = 'hehe';
console.log(obj);
// error TS7053: Element implicitly has an 'any' type because expression of type '"name"' can't be used to index type '{}'.