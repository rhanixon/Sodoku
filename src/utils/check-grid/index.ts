import { GRID } from "typings"

/**
 * a function to check if a grdi is full
 * @param grid a 9x9 soduko grid
 */

const checkGrid = (grid: GRID): boolean => {
    for (let i = 0; i < 9; i++)
        for (let j = 0; j < 9; j++) if (grid[i][j] === 0) return false
    return true
}

export default checkGrid
