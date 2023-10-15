// Reversing The Sentence

function reverseSentence(sentence){
    return sentence.split(' ').map(word=>{
        return word.split('').reverse().join('')
    }).join(' ')
}
let inputSentence="This is a sunny day"
let reversedSentence=reverseSentence(inputSentence)
console.log(reversedSentence);


// Array Sorting In Descending Order

function sortDesc(arr){
    return arr.sort((x,y)=>{
        return y-x
    })
}
let inputArr=[8,5,3,9,1,7]
let sortedArr=sortDesc(inputArr)
console.log(sortedArr);