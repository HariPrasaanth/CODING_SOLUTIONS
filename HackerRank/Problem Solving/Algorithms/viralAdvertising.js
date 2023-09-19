// Viral Advertising
function viralAdvertising(n) {
    // Write your code here
    let total_likes = 0
    let people = 5
    for(let day=1;day<=n;day++){
        total_likes+=Math.floor(people/2)
        people=Math.floor(people/2)*3
    }
    return total_likes;
}