function wait1()
{
    console.log("wait1");
    return new Promise((resolve, reject)=>{
        resolve("Promise resolved");
    });
}

function wait2()
{
    console.log("wait2");
    return new Promise((resolve,reject) =>{
        reject("Promise rejected");
    });
}

function wait3()
{
    console.log("wait3");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("Promise resolved after 3 seconds.....");
    }, 3000)
 });
}

wait3().then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});


wait1().then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});

wait2().catch((error)=>{ 
    console.log(error);
});
