import "./nprogress.css"
import React, { Component } from "react"
import "./App.css"
import EventList from "./EventList"
import CitySearch from "./CitySearch"
import NumberOfEvents from "./NumberOfEvents"
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api"
import { OfflineAlert } from "./Alert"
import WelcomeScreen from "./WelcomeScreen"
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"
import EventGenre from "./EventGenre"
import { Col, Container, Row } from "react-bootstrap"

class App extends Component {
    state = {
        events: [],
        locations: [],
        numberOfEvents: 32,
        showWelcomeScreen: undefined,
    }

    async componentDidMount() {
        this.mounted = true
        // const accessToken = localStorage.getItem("access_token")
        // const isTokenValid = await checkToken(accessToken)
        // const searchParams = new URLSearchParams(window.location.search)
        // const code = searchParams.get("code")
        // this.setState({ showWelcomeScreen: !(code || isTokenValid) })
        if (this.mounted) {
            getEvents().then((events) => {
                this.setState({
                    events,
                    locations: extractLocations(events),
                })
            })
        }

        if (!navigator.onLine) {
            this.setToOffline()
        } else {
            this.setToOnline()
        }
        window.addEventListener("offline", (event) => this.setToOffline())
        window.addEventListener("online", (event) => this.setToOnline())
    }

    setToOffline() {
        this.setState({
            showWelcomeScreen: false,
            offlineText:
                "Your are currently offline. Event details might be out of date.",
        })
    }

    async setToOnline() {
        const accessToken = localStorage.getItem("access_token")
        const isTokenValid = await checkToken(accessToken)
        this.setState({
            offlineText: "",
            showWelcomeScreen: !accessToken || !isTokenValid,
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
                <div className="search-wrapper">
                    <CitySearch
                        locations={locations}
                        updateEvents={this.updateEvents}
                    />
                    <h3>Number of Events:</h3>
                    <NumberOfEvents
                        numberOfEvents={numberOfEvents}
                        updateNumberOfEvents={this.updateNumberOfEvents}
                    />
                </div>

                <div className="data-vis">
                    <div className="data-vis-wrapper">
                        <EventGenre events={events} />
                        <ResponsiveContainer height={400}>
                            <ScatterChart
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 10,
                                    left: 10,
                                }}
                            >
                                <CartesianGrid />
                                <XAxis
                                    type="category"
                                    dataKey="city"
                                    name="City"
                                />
                                <YAxis
                                    allowDecimals={false}
                                    type="number"
                                    dataKey="number"
                                    name="Number of events"
                                />
                                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                                <Scatter data={this.getData()} fill="#76c893" />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6} xl={6}>
                            <EventList events={events} />
                        </Col>
                    </Row>
                </Container>

                <OfflineAlert text={offlineText} />

                <WelcomeScreen
                    showWelcomeScreen={this.state.showWelcomeScreen}
                    getAccessToken={() => {
                        getAccessToken()
                    }}
                />
            </div>
        )
    }
}

export default App
