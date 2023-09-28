//Migratory Birds
function migratoryBirds(arr) {
    // Write your code here
    let frequency = arr.reduce((freq, element) => {
        freq[element] = (freq[element] ||0)+1
        return freq
    }, {})
    let maximumFreq = Math.max(...Object.values(frequency))
    let finalArray = []
    for(let key of Object.keys(frequency)){
        if(frequency[key]==maximumFreq){
            finalArray.push(Number(key))
        }
    }
    return Math.min(...finalArray)
}