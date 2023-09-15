// Find Digits
function findDigits(n) {
    // Write your code here
    let numberArray = String(n).split('').map(a => Number(a))
    let divisors = 0;
    for(let i=0;i<numberArray.length;i++){
        if(n%numberArray[i]==0){
            divisors+=1
        }
    }
    return divisors
}