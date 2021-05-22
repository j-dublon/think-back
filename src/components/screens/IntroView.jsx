import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const IntroView = () => {
  return (
    <main className="intro">
      <h3 className="intro__title">This game is easy!</h3>
      <h4 className="intro__text">We will show you a letter...</h4>
      <div className="intro__text__container">
        <h4 className="intro__text">...if it matches the letter before last, click the tick button:</h4>
        <FontAwesomeIcon icon={faCheckCircle} size="2x" color="#13070c" className="intro__text_icon"/>
      </div>
      <div className="intro__text__container">
        <h4 className="intro__text">If not, click the cross button:</h4>
        <FontAwesomeIcon icon={ faTimesCircle } size="2x" color="#13070c" className="intro__text_icon"/>
      </div>
      <h4 className="intro__text">Ready?</h4>
      <a href="#" className="intro__button">START</a>
    </main>
  )
}

export default IntroView;
