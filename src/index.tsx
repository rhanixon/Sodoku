import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { ThemeProvider } from "styled-components"

import { Card, Content, Grid, Numbers, Title, NewButton } from "components"
import { configureStore, register } from "core"
import { GlobalStyles, theme } from "styles"

const { persistor, store } = configureStore()

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
    </ThemeProvider>,
    document.getElementById("root")
)

register()
