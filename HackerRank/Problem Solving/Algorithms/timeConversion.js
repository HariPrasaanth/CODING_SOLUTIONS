// Time Conversion
function timeConversion(s) {
    // Write your code here
    let timeArray = s.split(':')
    let hours = timeArray[0]
    let minutes = timeArray[1]
    let seconds = timeArray[2].slice(0, 2)
    let timeFormat = timeArray[2].substring(timeArray[2].length - 2)
    if(hours==='12' && timeFormat==='AM'){
        return '00:'+minutes+':'+seconds
    }
    else if(hours==='12' && timeFormat==='PM'){
        return '12:'+minutes+':'+seconds
    }
    else{
        if(timeFormat==='PM'){
            let formattedHour = Number(hours) + 12
            return String(formattedHour)+':'+minutes+':'+seconds
        }
        else{
            return hours.padStart(2, '0')+':'+minutes+':'+seconds
        }
    }
}