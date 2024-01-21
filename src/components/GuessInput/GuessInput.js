import React from "react";

function GuessInput( { handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess)
    setTentativeGuess("")
  }

  function handleInputChange(event) {
    setTentativeGuess(event.target.value.toUpperCase());
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
          value={tentativeGuess}
          onChange={(event) => handleInputChange(event)}
        />
      </form>
    </>
  );
}

export default GuessInput;
