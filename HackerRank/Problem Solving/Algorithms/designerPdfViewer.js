// Designer PDF Viewer
function designerPdfViewer(h, word) {
    // Write your code here
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let wordArray = word.split("")
    let biggest = 0;
    for(let i=0; i<wordArray.length;i++){
        if(h[alphabets.indexOf(wordArray[i])]>biggest){
            biggest=h[alphabets.indexOf(wordArray[i])]
        }
    }
    return biggest*word.length
}