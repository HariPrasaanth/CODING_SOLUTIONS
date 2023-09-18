// Beautiful Days at the Movies
function beautifulDays(i, j, k) {
    // Write your code here
    function reverseNumber(num){
        return Number(String(num).split('').reverse().join(''))
    }
    let beautyDays = []
    for(let a=i;a<=j;a++){
        let reversedNumber = reverseNumber(a)
        if((a-reversedNumber)%k===0){
            beautyDays.push(a)
        }
    }
    return beautyDays.length
}