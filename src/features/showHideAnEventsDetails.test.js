import { loadFeature, defineFeature } from "jest-cucumber"
import React from "react"
import { mount } from "enzyme"

import App from "../App"

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature")

defineFeature(feature, (test) => {
    let AppWrapper

    test("An event element is collapsed by default", ({
        given,
        when,
        then,
    }) => {
        given("a user is on the app's main page", () => {
            AppWrapper = mount(<App />)
        })

        when("an event is displayed", () => {})

        then(
            "the user should see an event element collapsed by default",
            () => {
                expect(AppWrapper.find(".extra-details")).toHaveLength(0)
            }
        )
    })

    test("User can expand an event to see its details", ({
        given,
        when,
        then,
    }) => {
        given("the user has been shown a list of events", async () => {
            AppWrapper = await mount(<App />)
        })

        when("the user opens the app", () => {
            AppWrapper.update()
            AppWrapper.find(".details-button").at(0).simulate("click")
        })

        then(
            "the user must be able to click and expand an event to see its details.",
            () => {
                expect(AppWrapper.find(".extra-details")).toHaveLength(1)
            }
        )
    })

    test("User can collapse an event to hide its details", ({
        given,
        when,
        then,
    }) => {
        given(
            "a user has clicked and expanded an event element to read its details",
            async () => {
                AppWrapper = await mount(<App />)
                AppWrapper.update()
                AppWrapper.find(".details-button").at(0).simulate("click")
                expect(AppWrapper.find(".extra-details")).toHaveLength(1)
            }
        )

        when(
            "the user wants to close the element by clicking on the close button",
            () => {
                AppWrapper.find(".details-button").at(0).simulate("click")
            }
        )

        then(
            "the user must be able to collapse an event and hide its details.",
            () => {
                expect(AppWrapper.find(".extra-details")).toHaveLength(0)
            }
        )
    })
})
