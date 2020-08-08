// @flow
import React, { Component } from 'react'
import './App.sass'
import Selector from './pure/Selector'
import Main from './Main'
import Footer from './Footer'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            setTheme: () => {}
        }
        this.mainRef = (main: Main) => {
            this.setState({
                setTheme: main.setTheme
            })
        }
    }

    render() {
        return (
            <div id="App">
                <Selector choices={['light', 'light green', 'dark']} setTheme={this.state.setTheme} />
                <Main ref={this.mainRef} theme={this.state.theme} />
                <Footer />
            </div>
        )
    }
}
