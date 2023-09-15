// Apple and Orange
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesinRange = apples.map(element => element + a).filter(a => a>=s && a<=t)
    let orangesinRange = oranges.map(element => element + b).filter(b => b>=s && b<=t)
    console.log(applesinRange.length)
    console.log(orangesinRange.length)
}