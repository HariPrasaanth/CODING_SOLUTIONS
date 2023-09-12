// Utopian Tree
function utopianTree(n) {
    // Write your code here
    let u = 1;
    if(n===0){
        return u;
    }
    else{
        for(let i=1; i<=n;i++){
            if(i%2===0){
                u+=1
            }
            else{
                u*=2
            }
        }
        return u
    }
}