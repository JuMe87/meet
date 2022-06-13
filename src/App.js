import "./nprogress.css"
import React, { Component } from "react"
import "./App.css"
import EventList from "./EventList"
import CitySearch from "./CitySearch"
import NumberOfEvents from "./NumberOfEvents"
import { getEvents, extractLocations } from "./api"

class App extends Component {
    state = {
        events: [],
        locations: [],
        numberOfEvents: 32,
    }

    componentDidMount() {
        this.mounted = true
        getEvents().then((events) => {
            let sliceNumber = this.state.numberOfEvents

            this.setState({
                locations: extractLocations(events),
                events: events.slice(0, sliceNumber),
            })
        })
    }

    componentWillUnmount() {
        this.mounted = false
    }

    updateNumberOfEvents = (numberOfEvents) => {
        this.setState(
            {
                numberOfEvents,
            },
            this.updateEvents(this.state.savedLocation, numberOfEvents)
        )
    }

    updateEvents = (
        location = this.state.savedLocation,
        number = this.state.numberOfEvents
    ) => {
        getEvents().then((events) => {
            let locationEvents =
                location === "" ||
                location === null ||
                location === undefined ||
                location === "all"
                    ? events
                    : events.filter((event) => event.location === location)

            this.setState({
                events: locationEvents.slice(0, number),
                numberOfEvents: number,
            })
        })
    }

    getData = () => {
        const { locations, events } = this.state
        const data = locations.map((location) => {
            const number = events.filter(
                (event) => event.location === location
            ).length
            const city = location.split(", ").shift()
            return { city, number }
        })
        console.log(data)
        return data
    }

    render() {
        const { events, locations, numberOfEvents } = this.state

        return (
            <div className="App">
                <h1>Meet App</h1>
                <h3>Choose your nearest city:</h3>
                <CitySearch
                    locations={locations}
                    updateEvents={this.updateEvents}
                />
                <h3>Number of Events:</h3>
                <NumberOfEvents
                    numberOfEvents={numberOfEvents}
                    updateNumberOfEvents={this.updateNumberOfEvents}
                />
                <EventList
                    events={events}
                    numberOfEvents={this.state.numberOfEvents}
                />
            </div>
        )
    }
}

export default App
