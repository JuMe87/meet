import React, { Component } from "react"

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        errorMessage: "",
    }

    handleInputChanged = (event) => {
        let value = event.target.value

        if (value < 1) {
            value = 1
        }
        if (value > 32) {
            value = 32
        }
        this.setState({
            numberOfEvents: value,
        })

        this.props.updateNumberOfEvents(value)
    }

    render() {
        return (
            <div className="numberOfEvents">
                <input
                    className="inputNumberOfEvents"
                    step="1"
                    type="number"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                ></input>
            </div>
        )
    }
}

export default NumberOfEvents
