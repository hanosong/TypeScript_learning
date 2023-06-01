const fn = (person:{age: number, name: string}) => {
    console.log(person.age);
}

fn({age: 28, name: 'haha'})