# Piano Exit

## Dependencies

##### please check package.json for version control if not listed:

1. NPM
2. Bootstrap
3. jQuery (v 3.6.8.slim.min)

## Prompt

A widget or plugin that pops up a modal on exit intent. (You've probably seen these before. You're about to close a page when a modal pops up giving you a "final offer" of sorts to keep you from leaving.) The twist is that the content of the modal is customizable based on how long the user was on the page.

## User Stories
### User Story 1: CONTROL PIANO KEYS BEING ACTIVE
As a user, I want to be able to start the piano keys being controlled by my computer keys when I want.

```
Given the user has the main page open
When the user presses the "Play Piano" button
Then the relevant keyboard keys become active as event listeners
```

### User Story 2: NOTE SELECTION
As a user, I want to be able to play with the web app without knowing anything about harmonies or music.

```
Given the user has the main page open
And they have clicked the "Play Piano" button
When they click on the relevant keys
Then complex piano notes will play that all sound good independant of a melody
```

### User Story 3: ADD/STOP BACKTRACK
As a user, I want to be able to play and stop background music.

```
Given the user has the main page open
When user selects one of the five backtrack buttons near the bottom
Then a backtrack sound will beging to play at approx. 50% volume as the piano keys
```

```
Given the user has the main page open
When user selects one of the backtrack button's "Stop ____" button
Then that backtrack music will stop playing without interrupting the active piano keys
```


### User Story 4: STOP PLAYING
As a user, I want to confirm that I'm leaving the application.

```
Given the user has the main page open
When the user clicks on the "Stop Piano" button
Then a modal will pop up telling them their active time played
And they can choose to confirm exit or remain playing
```

## Piano
The piano audio files (.wav) are from the creator [Dot](https://www.noiiz.com/creators/110).

To start the piano, press the "Play Piano" button on the app, the keydown events are not registered until the user does so. This was designed so that they didn't lose control of their keyboard should they not underestand the interaction type. 

## Timer
Based on the original prompt, there is a timer that begins once the user first loads the page and pauses/stops when the user clicks on "Stop Piano" button. The user will then get a modal popup with one of two messages, dependant on how many minutes they were on the application. This is intended to get them to stay on the app for longer, reminding them of how little they've experiemented with all the sound combinations. 

## Auto-close
After confirming that the user wants to leave, if they click the "confirm" button within the modal, they recieve a thank you message and the entire window will auto-close. 
