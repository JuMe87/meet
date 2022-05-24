import { loadFeature, defineFeature } from "jest-cucumber"
import React from "react"
import { mount } from "enzyme"
import NumberOfEvents from "../NumberOfEvents"
import App from "../App"

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature")

defineFeature(feature, (test) => {
    let AppWrapper

    test("When user hasn't specified a number, 32 is the default number.", ({
        given,
        when,
        then,
    }) => {
        given(
            "the user hasn't specified a number of events he wants to see",
            async () => {
                AppWrapper = await mount(<App />)
            }
        )

        when("using the app", () => {
            AppWrapper.update()
        })

        then("the user should see 32 events by default.", () => {
            expect(AppWrapper.find(".event")).toHaveLength(2)
        })
    })

    test("User can change the number of events they want to see.", ({
        given,
        when,
        then,
    }) => {
        given("the user is on the app`s main page", async () => {
            AppWrapper = await mount(<App />)
        })

        when(
            "the user sets the number of events he wants to see in the according box",
            () => {
                const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents)
                NumberOfEventsWrapper.find(".inputNumberOfEvents").simulate(
                    "change",
                    { target: { value: 1 } }
                )
            }
        )

        then("this number will be displayed.", () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents)
            NumberOfEventsWrapper.find(".inputNumberOfEvents").simulate(
                "change",
                { target: { value: 1 } }
            )
            expect(AppWrapper.state("numberOfEvents")).toEqual(1)
        })
    })
})
