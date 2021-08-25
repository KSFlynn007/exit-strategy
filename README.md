# Piano Exit

## dependencies

##### please check package.json for version control if not listed:

1. NPM
2. Bootstrap
3. jQuery (v 3.6.8.slim.min)

## prompt

A widget or plugin that pops up a modal on exit intent. (You've probably seen these before. You're about to close a page when a modal pops up giving you a "final offer" of sorts to keep you from leaving.) The twist is that the content of the modal is customizable based on how long the user was on the page.

## Piano
The piano audio files (.wav) were taken from Noiiz.com, from the creator [Dot](https://www.noiiz.com/creators/110). Audio was selected for it's complex tones so as to give the user a pleasant experience without hitting any "bad" keys. There are also 5 backtrack audio files that can be playing in any combination that run on a loop at 40%-60% volume as compared to the piano keys. 

Full disclosure, I am not a musician, and I designed Piano Exit from the position of someone who doesn't know how to make harmonies.

To start the piano, press the "Play Piano" button on the app, the keydown events are not registered until the user does so. This was designed so that they didn't lose control of their keyboard should they not underestand the controls. 

## Timer
Based on the original prompt, there is a timer that begins once the user first loads the page and pauses/stops when the user clicks on "Stop Piano" button. The user will then get a modal popup with one of two messages, depndant on how many minutes they were on the application. This is intended to get them to stay on the app for longer, reminding them of how little they've experiemented with all the sound combinations. 

## Auto-close
After confirming that the user wants to leave, if they click the "confirm" button within the modal, they recieve a thank you message and the entire window will auto-close. 
