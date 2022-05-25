import React, { Component } from "react"

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        message: "",
    }

    handleInputChanged = (event) => {
        const value = event.target.value
        if (value <= 0 || value > 32) {
            this.setState({
                numberofEvents: "",
                message: "Please enter a number between 1 and 32",
            })
        } else {
            this.setState({
                numberOfEvents: value,
            })
        }
        this.props.updateNumberOfEvents(event.target.value)
    }

    render() {
        return (
            <div className="numberOfEvents">
                <input
                    className="inputNumberOfEvents"
                    type="number"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                ></input>
            </div>
        )
    }
}

export default NumberOfEvents
