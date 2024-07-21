// Take a number and check if it is even or odd, 

// if its is even then check if it is divisible by 4 or not.

// if it is odd then check if it is divisible by 3 or not.


let n = 56 

if(n%2==0){
    console.log("Even")
    if(n%4 ==0 ){
        console.log("Divisible by 4")
    }
    else{
        console.log("Not Divisible by 4")
    }
}
else{
    console.log("Odd")
    if(n%3 ==0 ){
        console.log("Divisible by 3")
    }
    else{
        console.log("Not Divisible by 3")
    }
}