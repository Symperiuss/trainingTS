// mettre les valeurs de tableau 1 dans tableau 2 
//ensuite inverser l'ordre 

function push(number : number[]){

let number2 : number[] = []
let i = 0; 

while (i < number.length){

    number2[i] =  number[i]; 

    i += 1
}

return number2
}

let number : number[] = [10, 15 ,83 ,75 , 36]

console.log(push(number))

