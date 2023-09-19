// Subarray Division
function birthday(s, d, m) {
    // Write your code here
    let result = 0;
    for(let i=0;i<s.length;i++){
        let element = s.slice(i, i+m)
        if(element.length==m){
            let elementSum = element.reduce((sum, ele) => sum+ele, 0)
            if(elementSum===d){
                result+=1
            }
        }
        else{
            result+=0
        }
    }
    return result
}