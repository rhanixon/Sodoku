import React, { FC, Children, useCallback, useEffect, useState } from "react"
import useMouseTrap from "react-hook-mousetrap"
import { useDispatch, useSelector } from "react-redux"
import { AnyAction, Dispatch } from "redux"
import { createGrid, IReducer, selectBlock } from "reducers"
import Block from "./block"
import { Container, Row } from "./styles"
import { INDEX, BLOCK_COORDS } from "typings"

interface IState {
    selectedBlock?: BLOCK_COORDS
}

const Grid: FC = () => {
    const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({
        selectedBlock,
    }))
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const create = useCallback(() => dispatch(createGrid()), [dispatch])
    useEffect(() => {
        create()
    }, [create])

    const moveDown = () => {
        if (state.selectedBlock && state.selectedBlock[0] < 8)
            dispatch(
                selectBlock([
                    (state.selectedBlock[0] + 1) as INDEX,
                    state.selectedBlock[1],
                ])
            )
    }
    const moveUp = () => {
        if (state.selectedBlock && state.selectedBlock[0] > 0)
            dispatch(
                selectBlock([
                    (state.selectedBlock[0] - 1) as INDEX,
                    state.selectedBlock[1],
                ])
            )
    }
    const moveLeft = () => {
        if (state.selectedBlock && state.selectedBlock[1] > 0)
            dispatch(
                selectBlock([
                    state.selectedBlock[0],
                    (state.selectedBlock[1] - 1) as INDEX,
                ])
            )
    }
    const moveRight = () => {
        if (state.selectedBlock && state.selectedBlock[1] < 8)
            dispatch(
                selectBlock([
                    state.selectedBlock[0],
                    (state.selectedBlock[1] + 1) as INDEX,
                ])
            )
    }

    useMouseTrap("down", moveDown)
    useMouseTrap("up", moveUp)
    useMouseTrap("left", moveLeft)
    useMouseTrap("right", moveRight)

    return (
        <Container>
            {Children.toArray(
                [...Array(9)].map((_, rowIndex) => (
                    <Row>
                        {Children.toArray(
                            [...Array(9)].map((_, colIndex) => (
                                <Block
                                    colIndex={colIndex as INDEX}
                                    rowIndex={rowIndex as INDEX}
                                />
                            ))
                        )}
                    </Row>
                ))
            )}
        </Container>
    )
}

export default Grid
