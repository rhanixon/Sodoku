/**
 * return a random sodoku grid index in the range 0,8
 */

const getRandomIndex = () => {
    return Math.floor(Math.random() * 9)
}

export default getRandomIndex
