import React from 'react'
import Link from 'gatsby-link'

class Counter extends React.Component {
    constructor() {
        super()
    }

    state = { count: 0 }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    decrement = () => {
        this.setState({count: this.state.count - 1});
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>
                    <button onClick={this.decrement}> - </button>
                        { this.state.count }
                    <button onClick={this.increment}> + </button>
                </p>
            </div>
        )
    }
}

export default Counter;