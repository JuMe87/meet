Feature: SHOW/HIDE AN EVENT'S DETAILS

Scenario: An event element is collapsed by default
Given a user is on the app's main page
When an event is displayed
Then the user should see an event element collapsed by default

Scenario: User can expand an event to see its details
Given the user has been shown a list of events
When the user opens the app
Then the user must be able to click and expand an event to see its details.

Scenario: User can collapse an event to hide its details
Given a user has clicked and expanded an event element to read its details
When the user wants to close the element by clicking on the close button
Then the user must be able to collapse an event and hide its details.

