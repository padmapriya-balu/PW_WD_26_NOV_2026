num1 = -10;
if(num1 == 0){
    console.log("The number is zero");
}
else if(num1>0 && num1%2 == 0){  
    console.log("The number is positive and even");
}    
else if(num1>0 && num1%2 == 1){
    console.log("The number is positive and odd"); 
}
else if(num1<0 && num1%2 == 0){
    console.log("The number is negative and even");
}    
else {
    console.log("The number is negative and odd"); 
}