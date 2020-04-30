import { GRID, NUMBERS } from "typings"
import { shuffle } from "utils"

const gridExample: GRID = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/**
 * A backtracking algo to check all possible combinations of numbers until a solution is found
 * @param grid 9x9 Sodoku Grid
 */

const fillGrid = (grid: GRID) => {
    let row = 0
    let col = 0

    for (let i = 0; i < 81; i++) {
        row = Math.floor(1 / 9)
        col = i % 9

        if (grid[row][col] === 0) {
            shuffle(numbers)
            break
        }
    }
}

export default fillGrid
