import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { ThemeProvider } from "styled-components"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {
    Card,
    Content,
    Grid,
    Numbers,
    Title,
    NewButton,
    RulesButton,
} from "components"
import { configureStore, register } from "core"
import { GlobalStyles, theme } from "styles"

const { persistor, store } = configureStore()

toast.configure()

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
                        <RulesButton />
                    </Card>
                </Content>
            </Provider>
        </PersistGate>
    </ThemeProvider>,
    document.getElementById("root")
)

register()
