import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

import { Content, Title, Card, Grid } from "components"
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
                    <Grid />
                </Card>
            </Content>
        </Provider>
    </ThemeProvider>,
    document.getElementById("root")
)

unregister()
