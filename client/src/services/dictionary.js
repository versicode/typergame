import wordsPossible from './words.js'
const wordsInUse = []

export function getRandomWord() {
    const index = Math.floor(Math.random() * wordsPossible.length)
    const word = wordsPossible[index]

    wordsPossible.splice(index, 1)

    wordsInUse.push(word)

    return word
}

export function addWordToDictionary(word) {
    if (wordsInUse.includes(word)) {
        const index = wordsInUse.indexOf(word)

        wordsInUse.splice(index, 1)
        wordsPossible.push(word)
    } else {
        console.log('cheater!')
    }
}

export function isWordsInUseContainString(str) {
    console.log(wordsInUse.filter(fullWord => fullWord.indexOf(str) === 0))
    return wordsInUse.filter(fullWord => fullWord.indexOf(str) === 0).length > 0
}

export function isWordsInUseContainWord(word) {
    return wordsInUse.filter(fullWord => fullWord === word)
}
