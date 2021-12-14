module.exports = (opponentsChoice) => {
  function getResult(opponentsChoice, clientChoice) {
    if ((opponentsChoice === "Rock." && clientChoice === "Scissors." || (opponentsChoice === "Paper." && clientChoice === "Rock.") || (opponentsChoice === "Scissors." && clientChoice === "Paper."))) {
      return "You won."
    } else if (opponentsChoice === clientChosen) {
      return "Draw."
    } else {
      return "I won."
    }
  }
  const choices = [
    "Rock.",
    "Paper.",
    "Scissors."
  ]
  const clientChoice = choices[Math.floor(Math.random() * choices.length)]
  const result = getResult(reacted, clientChoice)

  return result
}