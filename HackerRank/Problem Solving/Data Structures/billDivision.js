// Bill Division
function bonAppetit(bill, k, b) {
    // Write your code here
    let total_bill = bill.reduce((total, bill) => total+bill, 0)
    let excluding_anna = total_bill - bill[k]
    let anna_share = excluding_anna/2
    if(anna_share!==b){
        if(anna_share>b){
            console.log(anna_share - b)
        }
        else{
            console.log(b-anna_share)
        }
    }
    else{
        console.log('Bon Appetit')
    }
}