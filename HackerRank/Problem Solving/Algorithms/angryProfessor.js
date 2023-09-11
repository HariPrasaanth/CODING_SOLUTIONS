// Angry Professor
function angryProfessor(k, a) {
    // Write your code here
    let onTime = a.filter(a => a<=0)
    if(onTime.length >= k){
        return 'NO'
    }
    else{
        return 'YES'
    }
}