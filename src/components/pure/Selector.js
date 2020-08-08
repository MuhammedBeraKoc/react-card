// @flow
import React, { Component } from 'react'
import './Selector.sass'

type Props = {
    choices: Array<string>,
    setTheme: (string) => void
}

export default class Selector extends Component<Props> {
    capitaliseEachWord(sentence: string): string {
        const stringArray = sentence.split(' ')
        for (let i = 0; i < stringArray.length; ++i) {
            stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1)
        }
        return stringArray.join(' ')
    }

    render() {
        return (
            <div className="selector">
                {this.props.choices.map((choice) => <div key={choice.length} className="choice" onClick={() => this.props.setTheme(choice)}>{this.capitaliseEachWord(choice)}</div>)}
            </div>
        )
    }
}
