import createFullGrid from "./"

describe("createFullGrid", () => {
    it("createes a 9x9 grid with a value range from 1 to 9", () => {
        const grid = createFullGrid()
        for (let row in grid)
            for (let col in grid[row]) {
                expect(grid[row][col]).toBeGreaterThanOrEqual(1)
                expect(grid[row][col]).toBeLessThanOrEqual(9)
            }
    })
})
