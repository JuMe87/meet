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
            if (this.mounted) {
                this.setState({ events, locations: extractLocations(events) })
            }
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
            this.updateEvents(this.state.locations, numberOfEvents)
        )
    }

    updateEvents = (location, eventCount) => {
        getEvents().then((events) => {
            const locationEvents =
                location === "all"
                    ? events
                    : events.filter((event) => event.location === location)
            if (this.mounted) {
                this.setState({
                    events: locationEvents.slice(0, this.state.numberOfEvents),
                    currentLocation: location,
                    numberOfEvents: eventCount,
                })
            }
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
        return data
    }

    render() {
        const { events, locations, numberOfEvents } = this.state

        return (
            <div className="App">
                <h1>Welcome to Meet!</h1>
                <h2>
                    Looking for an event in your city? Start by typing a city
                    name!
                </h2>
                <CitySearch
                    locations={locations}
                    updateEvents={this.updateEvents}
                />
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
