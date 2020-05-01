import global from "global"
import { GRID, NUMBERS } from "typings"
import { checkGrid, identifySquare, isInCol, isInRow, isInSquare } from "utils"

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * a backtracking algo to check all possible combinations of numbers until a grid is solved
 * @param grid a 9x9 array of values from 0,9 constituting a sodoku grid
 */
const solveGrid = (grid: GRID) => {
    let col = 0
    let row = 0

    for (let i = 0; i < 81; i++) {
        row = Math.floor(i / 9)
        col = i % 9

        if (grid[row][col] === 0) {
            for (let value of numbers)
                if (!isInRow({ grid, row, value }))
                    if (!isInCol({ col, grid, value })) {
                        const square = identifySquare({ col, grid, row })
                        if (!isInSquare({ square, value })) {
                            grid[row][col] = value
                            if (checkGrid(grid)) {
                                global.counter++
                                break
                            } else if (solveGrid(grid)) return true
                        }
                    }
            break
        }
    }
}

export default solveGrid
