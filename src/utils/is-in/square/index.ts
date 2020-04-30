import { NUMBERS, SQUARE } from "typings"

interface IInput {
    square: SQUARE
    value: NUMBERS
}

/**
 * a fuincion that returns true if a value is already being used in the current grid square
 * @param input object with 3x3 square and value
 */

const isInSquare = ({ square, value }: IInput): boolean => {
    return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare
