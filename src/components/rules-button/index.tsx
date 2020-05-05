import React, { FC } from "react"
import Popup from "reactjs-popup"

import { Button, Header, Contents, Close } from "components"

const RulesButton: FC = () => {
    return (
        <Popup trigger={<Button> How To Play </Button>} modal>
            {(close) => (
                <div className="modal">
                    <Close onClick={close}>&times;</Close>
                    <Header> How To Play </Header>
                    <Contents>
                        {" "}
                        The classic Sudoku game involves a grid of 81 squares.
                        The grid is divided into nine blocks, each containing
                        nine squares.
                        <br /> <br /> The rules of the game are simple: each of
                        the nine blocks has to contain all the numbers 1-9
                        within its squares. Each number can only appear once in
                        a row, column or box.
                        <br /> <br />
                        The difficulty lies in that each vertical nine-square
                        column, or horizontal nine-square line across, within
                        the larger square, must also contain the numbers 1-9,
                        without repetition or omission.
                        <br /> <br />
                        Every puzzle has just one correct solution.
                    </Contents>
                </div>
            )}
        </Popup>
    )
}

export default RulesButton
