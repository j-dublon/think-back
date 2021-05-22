import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const WelcomeView = () => {
  // ** ** ** ** HOOKS ** ** ** **
  // ** ** ** ** LOCAL ** ** ** **
  const [nameText, setNameText] = useState();

  // ** ** ** ** LOGIC ** ** ** **
  const handleChangeName = () => { };
  const handleSubmit = () => { };

  // ** ** ** ** RENDER ** ** ** **
  return (
    <main className="welcome">
      <h3 className="welcome__title">Welcome to Think Back</h3>
      <h4 className="welcome__text">Please enter your name to begin:</h4>
      <section className="welcome__form">
        <form onSubmit={ handleSubmit }>
          <input
            id="name"
            name="name"
            type="text"
            className="welcome__form__input"
            onChange={handleChangeName}
            value={nameText}
            required
          />
        </form>
        <button className="welcome__form__button">
          <FontAwesomeIcon icon={faArrowCircleRight} size="3x" color="#13070C" className="welcome__form__button__icon"/>
        </button>
      </section>
      
    </main>
  )
}

export default WelcomeView;
