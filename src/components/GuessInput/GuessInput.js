import React from "react";

function GuessInput() {
  const [guessInput, setGuessInput] = React.useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log({ guessInput });
    setGuessInput("");
  }

  function handleInputChange(event) {
    setGuessInput(event.target.value.toUpperCase());
  }

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => handleFormSubmit(event)}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={guessInput}
          onChange={(event) => handleInputChange(event)}
        />
      </form>
    </>
  );
}

export default GuessInput;
