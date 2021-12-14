# rock-paper-scissors-function
Rock paper scissors function.

---

## Usage
```javascript
const RockPaperScissorsFunction = require("./rock-paper-scissors-function.js")
const choices = [
  "Rock.",
  "Paper.",
  "Scissors."
]
const opponentsChoice = choices[Math.floor(Math.random() * choices.length)]
// Normally "opponentsChoice" value is your function's user's choice.

console.log(RockPaperScissorsFunction(opponentsChoice))
```

---

## Result
```
You won.
```
or
```
Draw.
```
or
```
I won.
```
