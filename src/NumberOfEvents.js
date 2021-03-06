import React, { Component } from "react"

import { ErrorAlert } from "./Alert"

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        errorMessage: "",
    }

    handleInputChanged = (event) => {
        const value = event.target.value
        if (value < 1 || value > 32) {
            this.setState({
                numberOfEvents: "",
                errorText: "Please enter a number between 1 and 32",
            })
        } else {
            this.setState({
                errorText: "",
                numberOfEvents: value,
            })
        }
        this.props.updateNumberOfEvents(event.target.value)
    }

    render() {
        return (
            <div className="numberOfEvents">
                <div className="numberOfEventsAlert">
                    <ErrorAlert text={this.state.errorText} />
                </div>

                <input
                    className="inputNumberOfEvents"
                    step="1"
                    type="number"
                    placeholder="Insert number"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                ></input>
            </div>
        )
    }
}

export default NumberOfEvents
