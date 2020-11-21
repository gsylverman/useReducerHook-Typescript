import React from 'react';

const fncArr =  <T extends {}>(arr: Array<T>) => {
  return arr[arr.length - 1];
}

// console.log(fncArr([1,2,3]));
// console.log(fncArr(["a","b"]))

const makeArr = <T, Y = string>(val1: T, val2: Y): [T, Y] => {
  return [val1, val2];
};

// console.log(makeArr("a","b"));
// console.log(makeArr(1, 2));
// console.log(makeArr(1, "a"));
// console.log(makeArr<number | null>(1, "a"));

interface Obj {
  firstName: string;
  lastName: string;
}
const makeFullName = <T extends Obj>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName
  }
};

// console.log(makeFullName({ firstName: "Mihai", lastName: "Popescu", age: 25}));
// console.log(makeFullName({ somevalue: 12,firstName: "Mihai", lastName: "Popescu", age: 25}));


interface SomeType<T> {
  name: string;
  age: number;
  other: T;
} 

type OtherType = SomeType<string>;


export default function PracticeTypes () {
  return (
    <>
    <Form>
      {(val)=>(
        <>
          {val.name}
        </>
      )}
    </Form>
    </>
  )
}
type t1 = {
  name:string;
}
interface FormProps<T> {
  children :(data: t1) => JSX.Element;
}

const Form = <T extends {}>({children}: FormProps<T>) => {
  return children({name:'SomeChild Name'})
}


class Collection<T> {
  list: Array<T> = [];

  addToList = (item: T) => {
    this.list.push(item);
  }

  removeFromArr = (nr: T) => {
    const newList = this.list.filter(item => item !== nr);
    this.list = newList;
  }
}

const collection = new Collection<number>();
collection.addToList(1);
collection.addToList(2);
collection.addToList(3);
collection.addToList(4);
collection.removeFromArr(3);

const collection1 = new Collection<string>();
collection1.addToList("a");
collection1.addToList("b");
collection1.addToList("c");
collection1.addToList("d");
collection1.removeFromArr("b")
// console.log(collection1.list);