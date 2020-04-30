import React, { FC } from "react"

import { Container } from "./style"

interface IProps {
    colIndex: number
    rowIndex: number
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
    return <Container />
}

export default Block
