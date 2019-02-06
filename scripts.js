'use strict'
let prevIndex = null

const level1 = () => {
    let wordsArray = ['a', 'e', 'i', 'o', 'u']
    let wordIndex1 = null

    do {
        wordIndex1 = Math.floor((Math.random() * (wordsArray.length)) + 0)
    } while (wordIndex1 == prevIndex)

    document.getElementById('word').innerText = wordsArray[wordIndex1].toUpperCase()
        prevIndex = wordIndex1
}

const level2a = () => {
    let wordsArray = ['a', 'e', 'i', 'o', 'u']
    let wordIndex1 = null
    let wordIndex2 = null
    do {
        wordIndex1 = Math.floor((Math.random() * (wordsArray.length)) + 0)
    } while (wordIndex1 == prevIndex)

    wordIndex2 = Math.floor((Math.random() * (wordsArray.length)) + 0)

    document.getElementById('word').innerText = wordsArray[wordIndex1].toUpperCase() + '___' + wordsArray[wordIndex2].toUpperCase()
        prevIndex = wordIndex1
}

const level2b = () => {
    let wordsArray = ['a', 'e', 'i', 'o', 'u']
    let wordIndex1 = null
    let wordIndex2 = null
    do {
        wordIndex1 = Math.floor((Math.random() * (wordsArray.length)) + 0)
    } while (wordIndex1 == prevIndex)

    wordIndex2 = Math.floor((Math.random() * (wordsArray.length)) + 0)

    document.getElementById('word').innerText = wordsArray[wordIndex1].toUpperCase() + wordsArray[wordIndex2].toUpperCase()
        prevIndex = wordIndex1
}

const level3 = () => {
    let wordsArray = ['si', 'no', 'yo', 'tu', 'el']
    let wordIndex1 = null

    do {
        wordIndex1 = Math.floor((Math.random() * (wordsArray.length)) + 0)
    } while (wordIndex1 == prevIndex)

    document.getElementById('word').innerText = wordsArray[wordIndex1].toUpperCase()
        prevIndex = wordIndex1
}

const level4 = () => {
    let wordsArray = [
        'mesa', 'luna', 'gato', 'sol', 
        'moto', 'pera', 'cama', 'bebe', 
        'casa', 'nana', 'nino', 'malo', 
        'cara', 'pelo', 'te', 'ta',
        'ra', 're','mi','ma','sa',
        ]
    let wordIndex1 = null

    do {
        wordIndex1 = Math.floor((Math.random() * (wordsArray.length)) + 0)
    } while (wordIndex1 == prevIndex)

    document.getElementById('word').innerText = wordsArray[wordIndex1].toUpperCase()
        prevIndex = wordIndex1
}

window.onload = function(){
    document.onkeydown = function(e){
        if(e.keyCode == 32){
            level4()
        }
        if(e.keyCode == 115){
            let words = document.querySelector('.flex-container')
            if (words.style.display === 'none') {
                words.style.display = 'flex'
            } else {
                words.style.display = 'none'
            }
        }
    }

    document.addEventListener('touchstart', level4) 
}
