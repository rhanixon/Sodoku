import { GRID, NUMBERS } from "typings"

interface IInput {
    grid: GRID
    row: number
    value: NUMBERS
}

/**
 * a function that returns true if the value is already in current grid row
 * @param input object with 9x9 sodoku grid, row index, and value
 */
const isInRow = ({ grid, row, value }: IInput): boolean => {
    return grid[row].includes(value)
}

export default isInRow
