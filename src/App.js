import "./nprogress.css"
import React, { Component } from "react"
import "./App.css"
import EventList from "./EventList"
import CitySearch from "./CitySearch"
import NumberOfEvents from "./NumberOfEvents"
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api"
import { OfflineAlert } from "./Alert"
// import WelcomeScreen from "./WelcomeScreen"

class App extends Component {
    state = {
        events: [],
        locations: [],
        numberOfEvents: 32,
        showWelcomeScreen: undefined,
    }

    async componentDidMount() {
        this.mounted = true
        const accessToken = localStorage.getItem("access_token")
        const isTokenValid = (await checkToken(accessToken)).error
            ? false
            : true
        const searchParams = new URLSearchParams(window.location.search)
        const code = searchParams.get("code")
        this.setState({ showWelcomeScreen: !(code || isTokenValid) })
        if ((code || isTokenValid) && this.mounted) {
            getEvents().then((events) => {
                if (this.mounted) {
                    this.setState({
                        events,
                        locations: extractLocations(events),
                    })
                }
            })
        }

        if (!navigator.onLine) {
            this.setState({
                offlineText:
                    "Your are currently offline. Event details might be out of date.",
            })
        } else {
            this.setState({
                offlineText: "",
            })
        }
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
        if (this.state.showWelcomeScreen === undefined)
            return <div className="App" />

        const { events, locations, numberOfEvents, offlineText } = this.state

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

                <OfflineAlert text={offlineText} />

                {/* <WelcomeScreen
                    showWelcomeScreen={this.state.showWelcomeScreen}
                    getAccessToken={() => {
                        getAccessToken()
                    }}
                /> */}
            </div>
        )
    }
}

export default App
