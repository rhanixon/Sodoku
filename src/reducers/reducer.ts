import { AnyAction } from "redux"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { createFullGrid, removeNumbers, copyGrid, compareArrays } from "utils"
import { IReducer } from "./interfaces"
import * as types from "./types"
import { GRID } from "typings"

const initialState: IReducer = {}

const reducer = (state = initialState, action: AnyAction): IReducer => {
    switch (action.type) {
        case types.CREATE_GRID: {
            const solvedGrid = createFullGrid()
            const gridCopy = copyGrid(solvedGrid)
            const challengeGrid = removeNumbers(gridCopy)
            const workingGrid = copyGrid(challengeGrid)
            return {
                ...state,
                challengeGrid,
                solvedGrid,
                workingGrid,
            }
        }

        case types.FILL_BLOCK: {
            if (state.workingGrid && state.solvedGrid) {
                if (
                    state.solvedGrid[action.coords[0]][action.coords[1]] !==
                    action.value
                ) {
                    toast("Incorect Option", { autoClose: 2000 })
                    return state
                }
                state.workingGrid[action.coords[0]][action.coords[1]] =
                    action.value
                if (compareArrays(state.workingGrid, state.solvedGrid))
                    toast("Congrats!")
                return { ...state, workingGrid: [...state.workingGrid] as GRID }
            }
            return state
        }

        case types.SELECT_BLOCK:
            return {
                ...state,
                selectedBlock: action.coords,
            }
        default:
            return state
    }
}

export default reducer
