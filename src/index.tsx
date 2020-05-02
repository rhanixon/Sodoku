import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

import { Card, Content, Grid, Numbers, Title, NewButton } from "components"
import { configureStore, unregister } from "core"
import { GlobalStyles, theme } from "styles"

const store = configureStore()

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
            <Content>
                <Title>Sodoku</Title>
                <Card>
                    <NewButton />
                    <Grid />
                    <Numbers />
                </Card>
            </Content>
        </Provider>
    </ThemeProvider>,
    document.getElementById("root")
)

unregister()
