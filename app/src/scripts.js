'use strict'

window.onload = function(){
    const selectedLevel = level3
    const separator = null

    let prevIndex = null
    
    document.addEventListener('keydown', event => {
        const SPACE_KEY = 32
        const F4_KEY = 115

        if (event.keyCode === SPACE_KEY){
            prevIndex = getWord(selectedLevel, prevIndex, separator)
        }

        if(event.keyCode === F4_KEY){
            let words = document.querySelector('.flex-container')
            if (words.style.display === 'none') {
                words.style.display = 'flex'
            } else {
                words.style.display = 'none'
            }
        }
    })

    document.addEventListener('touchstart', () => getWord(selectedLevel)) 
}

function getWord(wordsList, wordListIndexToAvoid, separator = null)
{    
    let firstWordIndex = null
    let secondWordIndex = null

    do 
    {
        firstWordIndex = Math.floor((Math.random() * (wordsList.length)) + 0)
    } 
    while (firstWordIndex === wordListIndexToAvoid)

    secondWordIndex = Math.floor((Math.random() * (wordsList.length)) + 0)

    const firstWord = wordsList[firstWordIndex].toUpperCase()
    const secondWord = wordsList[secondWordIndex].toUpperCase()

    document.getElementById('word').innerText = constructWord(firstWord, secondWord, separator)
    return firstWordIndex
}

function constructWord(firstWord, secondWord, separator){
    if (separator) {
        return firstWord + separator + secondWord
    } else {
        return firstWord
    }
}


const level1 = ['a', 'e', 'i', 'o', 'u']

const level2 = ['si', 'no', 'yo', 'tu', 'el']

const level3 = [
    'mesa', 'luna', 'gato', 'sol', 
    'moto', 'pera', 'cama', 'bebe', 
    'casa', 'nana', 'nino', 'malo', 
    'cara', 'pelo', 'te', 'ta',
    'ra', 're','mi','ma','sa',
]