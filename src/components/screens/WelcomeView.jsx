import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import useData from '../../data/useData';
import { useNavigate } from "@reach/router"

const WelcomeView = () => {
  // ** ** ** ** HOOKS ** ** ** **
  const {setUserName} = useData();
  const navigate = useNavigate();
  
  // ** ** ** ** LOCAL ** ** ** **
  const [nameText, setNameText] = useState('');
  const [showError, setShowError] = useState(false);

  // ** ** ** ** EFFECTS ** ** ** **

  // ** ** ** ** LOGIC ** ** ** **
  const handleChangeName = (event) => {
    setNameText(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nameText.length === 0) {
      setShowError(true);
    } else {
      setShowError(false);
    }

    setUserName(nameText);
    navigate('/intro');
  };

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
        <button className="welcome__form__button" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faArrowCircleRight} size="3x" color="#13070C" className="welcome__form__button__icon"/>
        </button>
      </section>
      {showError && <p className="welcome__error">Please enter your name</p>}
    </main>
  )
}

export default WelcomeView;
