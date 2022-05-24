Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user hasn't specified a number, 32 is the default number.
Given the user hasn't specified a number of events he wants to see
When using the app
Then the user should see 32 events by default.

Scenario: User can change the number of events they want to see.
Given the user is on the app`s main page
When the user sets the number of events he wants to see in the according box
Then this number will be displayed.

