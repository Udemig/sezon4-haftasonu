import {Button, Col, Container, Row} from "react-bootstrap"
import Header from "./header"
import Footer from "./footer"
import {useContext} from "react"
import {ThemeContext} from "./theme-context-provider"
import TodoList from "./todo-list"

function App() {
    const {themeColor, setThemeColor} = useContext(ThemeContext)
    const themeContextValue = useContext(ThemeContext)

    return (
        <Container>
            <Header/>
            <hr/>
            <Row>
                <Col xs={12} sm={12} lg={4}>
                    <Button
                        onClick={() => {
                            setThemeColor('light')
                        }}
                        variant={'primary'}>
                        Light
                    </Button>
                </Col>
                <Col xs={12} sm={12} lg={4}>
                    <Button
                        onClick={() => {
                            themeContextValue.setThemeColor('dark')
                        }}
                        variant={'danger'}>
                        Dark
                    </Button>
                </Col>
                <Col xs={12} sm={12} lg={4}>
                    <Button
                        onClick={() => {
                            themeContextValue.setThemeColor('system')
                        }}
                        variant={'success'}>
                        System
                    </Button>
                </Col>
            </Row>
            <hr/>

            <TodoList/>

            <hr/>

            <Footer/>
        </Container>
    );
}

export default App;
