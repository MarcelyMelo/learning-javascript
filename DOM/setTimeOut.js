/*
setTimeOut 

- clearTimeOut cancela o timeOut
- duração é em ms (1000ms == 1s)


*/

function sayHello(){
    console.log('Hello John');
}

setTimeout(sayHello, 1000)

// modo alternativo

setTimeout(()=>{
    console.log('Hey');
}, 3000)

// funções com argumentos

function showIdentity(name, identity){
    console.log(`hello, ${name}, your id number is ${identity}`);   
}

setTimeout(showIdentity, 4000, 'Marcy', 193212)

