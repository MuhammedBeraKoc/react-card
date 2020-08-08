// @flow
import React, { Component } from 'react'
import './Main.sass'
import Card from './pure/Card'

type Props = {}

type State = {
    theme: string
}

export default class Main extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            theme: 'light'
        }
        this.setTheme = this.setTheme.bind(this)
    }

    setTheme(theme: string): void {
        this.setState({ theme })
    }

    render() {
        return (
            <div id="Main">
                <Card title="React Card" content="A fully-customisable React card created for web developers. It has number of themes and options." buttonText="Try it!" theme={this.state.theme} />
            </div>
        )
    }
}
