# meet App

This is a serverless, progressive web application (PWA) with React using a  test-driven development (TDD) technique in order to enable user to see events taking place in their city. The application uses the Google  Calendar API to fetch upcoming events.

# Key Features:

-   Filter events by city.
-   Show/hide event details.
-   Specify number of events.
-   Use the app when offline.
-   Add an app shortcut to the home screen.
-   View a chart showing the number of upcoming events by city.

# Features and User Stories for each Scenario

## FEATURE 1: FILTER EVENTS BY CITY

### SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.

-   Given user hasn’t searched for any city
-   When the user opens the app
-   Then the user should see a list of all upcoming events

### SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.

-   Given the main page is open
-   When user starts typing in the city textbox
-   Then the user should see a list of cities (suggestions) that match what they’ve typed

### SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.

-   Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
-   When the user selects a city (e.g., “Berlin, Germany”) from the list
-   Then their city should be changed to that city (i.e., “Berlin, Germany”)
-   and the list of suggestions should disappear. And the user should receive a list of upcoming events in that city

## FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

### SCENARIO 1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT

**User Story**:

-   As a user,
-   I should be able to see an event element collapsed by default
-   so that I have an overview of all events first before diving into details.

**Gherkin description**:

-   Given a user hasn't clicked on an event element yet
-   When the user opens the app
-   Then the user should see an event element collapsed by default

### SCENARIO 2: USER CAN EXPAND AN EVENT TO SEE ITS

**User Story**:

-   As a user,
-   I should be able to expand an event
-   so that I can see its details.

**Gherkin description**:

-   Given a user hasn't opened an event yet
-   When the user opens the app
-   Then the user must be able to click and expand an event to see its details.

### SCENARIO 3: USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS

**User Story**:

-   As a user,
-   I should be able to collapse an event,
-   so that I can close its details after having read them.

**Gherkin description**:

-   Given a user has clicked and expanded an event element
-   When the user wants to read the details of an event
-   Then the user must be able to collapse an event and hide its details after having read the details.

## FEATURE 3: SPECIFY NUMBER OF EVENTS

### SCENARIO 1:WHEN USER HASN'T SPECIFIED A NUMBER, 32 IS THE DEFAULT NUMBER

**User Story**:

-   As a user,
-   I should be able to see 32 events,
-   so that I'm not overwhelmed with the amount of events.

**Gherkin description**:

-   Given the user hasn't specified a number of events he wants to see
-   When using the app
-   Then the user should see 32 events by default.

### SCENARIO 2: USER CAN CHANGE THE NUMBER OF EVENTS THEY WANT TO SEE

**User Story**:

-   As a user,
-   I should be able to change the number of events I want to see
-   so that I can gear the app towards my individual needs.

**Gherkin description**:

-   Given the user wanted to change the number of events from 32 to the number of his choice
-   When using the app
-   Then the user should be able to do so by changing the settings.

## FEATURE 4: USE THE APP WHEN OFFLINE

### SCENARIO 1: SHOW CACHED DATA WHEN THERE IS NO INTERNET CONNECTION

**User Story**:

-   As a user,
-   I should be able to access the app and its information
-   even when there is no internet connection.

**Gherkin description**:

-   Given the user has no internet connection
-   When using the app
-   Then the app must show the cached data so the user is still able to access the information on his app.

### SCENARIO 2: SHOW ERROR WHEN USER CHANGES THE SETTINGS (CITY, TIME RANGE)

**User Story**:

-   As a user,
-   I should be able to see an error message
-   so that I'm aware of the fact that I changed my user seetings such as city or time range.

**Gherkin description**:

-   Given the user has changed his settings suchs as city or time range
-   When using the app
-   Then the app must show an error message.

## FEATURE 5: DATA VISUALIZATION

### SCENARIO 1: SHOW A CHART WITH THE NUMBER OF UPCOMING EVENTS IN EACH CITY

**User Story**:

-   As a user
-   I should be able to see a chart with the number of upcoming events in each city
-   so that I get a quick overview of the number of events taking place.

**Gherkin description**:

-   Given the user wanted to know the number of upcoming events in each city
-   When the user opens the app
-   Then the user should see a chart with the number of upcoming events in each city.
