import { GRID, NUMBERS } from "typings"

interface IInput {
    col: number
    grid: GRID
    value: NUMBERS
}

/**
 * A function that returns true if a value is already in the current grid column
 * @param input object with 9x9 sodoku, grid column index, and value
 */
const isInCol = ({ col, grid, value }: IInput): boolean => {
    for (let i = 0; i < 9; i++) if (value === grid[i][col]) return true
    return false
}

export default isInCol
