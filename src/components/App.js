// @flow
import React, { Component } from 'react'
import './App.sass'
import Selector from './pure/Selector'
import Main from './Main'
import Footer from './Footer'

type Props = {}

type State = {
    setTheme: (s: string) => void
}

export default class App extends Component<Props, State> {
    mainRef: (main: Main | null) => void

    constructor(props: Props) {
        super(props)
        this.state = {
            setTheme: (s: string) => {}
        }
        this.mainRef = (main: Main | null) => {
            if (main instanceof Main) {
                this.setState({
                    setTheme: main.setTheme
                })
            }
        }
    }

    render() {
        return (
            <div id="App">
                <Selector choices={['light', 'light green', 'dark']} setTheme={this.state.setTheme} />
                <Main ref={this.mainRef} />
                <Footer />
            </div>
        )
    }
}
