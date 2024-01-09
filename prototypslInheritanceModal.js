//Objects in javascript have a hidden property prototype which is null or it references another object

const a = {
    prop1:1000
}

const b = {
    prop2 :10
}

a.__proto__=b // we are setting the prototypr of object a to b 

//if we read a property from object a and if it is not present then it read from object b and so on

Object.getPrototypeOf(a)
//return the prototype of a

const c = Object.create(b)
//an empty object c is created with the prototype of b

