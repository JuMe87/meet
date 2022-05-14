# meet

# Features and User Stories

FEATURE 1: FILTER EVENTS BY CITY

SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
- Scenario 1: An event element is collapsed by default
AS A USER,
I SHOULD BE ABLE TO SEE AN EVENT ELEMT COLLAPSED BY DEFAULS
SO THAT I HAVE AN OVERVIEW OF ALL EVENTS FIRST BEFORE DIVING INTO DETAILS.

- Scenario 2: User can expand an event to see its details
AS A USER,
I SHOULD BE ABLE TO EXPAND AN EVENT
SO THAT I CAN SEE ITS DETAILS.
Scenario 3: User can collapse an event to hide its details
AS A USER,
I SHOULD BE ABLE TO COLLAPSE AN EVENT
SO THAT I CAN CLOSE ITS DETAILS AFTER HAVING READ THEM.

FEATURE 3: SPECIFY NUMBER OF EVENTS
- Scenario 1: When user hasn’t specified a number, 32 is the default number
AS A USER,
I SHOULD BE ABLE TO SEE 32 EVENTS
SO THAT I’M NOT OVERWHELMED WITH THE LIST OF EVENTS.

- Scenario 2: User can change the number of events they want to see

AS A USER,
I SHOULD BE ABLE TO CHANGE THE NUMBER OF EVENTS I WANT TO SEE
SO THAT I CAN GEAR THE APP TOWARDS MY INDIVIDUAL NEEDS.

FEATURE 4: USE THE APP WHEN OFFLINE
- Scenario 1: Show cached data when there’s no internet connection
AS A USER,
I SHOULD BE ABLE TO ACCESS THE APP AND ITS INFORMATION 
SO THAT I CAN ACCESS THE INFORMATION EVEN WHEN THERE IS NO INTERNET CONNECTION.

- Scenario 2: Show error when user changes the settings (city, time range)
AS A USER,
I SHOULD BE ABLE TO SEE AN ERROR MESSAGE
SO THAT I’M AWARE OF THAT I CHANGED THE SETTINGS SUCH AS CITY OR TIME RANGE.

FEATURE 5: DATA VISUALIZATION
- Scenario 1: Show a chart with the number of upcoming events in each city
AS A USER
I SHOULD BE ABLE TO SEE A CHART WITH THE NUMBER OF UPCOMING EVENTS IN EACH CITY
SO THAT I GET A QUICK OVERVIEW OF THE NUMBER OF EVENTS TAKING PLACE.




