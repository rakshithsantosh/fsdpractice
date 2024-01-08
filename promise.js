//promises in javascript

//simple code snippet for promises

const functionPromise = new Promise ((resolve,reject)=>{
    //some asyn operation which will return resolve or reject
})

//promises has just three states pending resolved rejected

//.then used to handle the resolved state

functionPromise.then((result)=>{console.log(result) /*or we can also return*/})

//.then accepts a callback as an argument when a promise its resolved vale is passed an an argument in the call back 

//.catch

functionPromise.catch((error)=>{console.log(error)})

//when the promise is rejected then the .catch is invoked

//if we call another promise in .then its nested promise we can also do nested catch operations

//async await

const fnasync = async () =>{
    await functionPromise //someoperation

}

//await waits for the promise to get resolved we have to use await only if the function is async