// @flow

import React, { Component } from 'react'
import './Card.sass'

type Props = {
    title: string,
    content: string,
    buttonText: string,
    theme: string
}

export default class Card extends Component<Props> {
    render() {
        return (
            <div className={`card ${this.props.theme}`}>
                <div className="title">{this.props.title}</div>
                <div className="content">{this.props.content}</div>
                <div className="button">{this.props.buttonText}</div>
            </div>
        )
    }
}
