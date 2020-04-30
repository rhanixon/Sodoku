/**
 * An algortithm to shuffle the numbers in an array using the Fisher-Yates method
 * @param array And arraty that you want to shuffel
 */

const shuffle = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
}

export default shuffle
