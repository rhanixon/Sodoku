import { GRID, NUMBERS } from "typings"
import { isInRow, isInCol, shuffle } from "utils"

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

            for (let value of numbers) {
                if (!isInRow({ grid, row, value })) {
                    if (isInCol({ col, grid, value })) {
                        const square = [
                            [0, 0, 0],
                            [0, 0, 0],
                            [0, 0, 0],
                        ]
                        //is it not in the grid square?
                        //... then:
                        grid[row][col] = value
                        //check if grid is full. If so break and return true
                        //else run fillGrid(grid)
                    }
                    break
                }
            }
        }
    }
}

export default fillGrid
