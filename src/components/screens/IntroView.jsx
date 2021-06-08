import React, {useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import useData from '../../data/useData';
import { useNavigate } from "@reach/router"

const IntroView = () => {
  // ** ** ** ** HOOKS ** ** ** **
  const { userName, setCurrentPage } = useData();
  const navigate = useNavigate();

  // ** ** ** ** LOCAL ** ** ** **
  // ** ** ** ** EFFECTS ** ** ** **
  useEffect(() => {
    setCurrentPage('intro')
  }, [setCurrentPage])
  
  // ** ** ** ** LOGIC ** ** ** **
  const onClickStart = () => {
    navigate('/task')
   }
  
  // ** ** ** ** RENDER ** ** ** **
  return (
    <main className="intro">
      <h3 className="intro__title">{`Hi ${userName}. This game is easy!`}</h3>
      <h4 className="intro__text">We will show you a letter...</h4>
      <div className="intro__text__container">
        <h4 className="intro__text">...if it matches the letter before last, click the tick button: <FontAwesomeIcon icon={faCheckCircle} color="#13070c" className="intro__text__icon"/></h4>
      </div>
      <h4 className="intro__text">Ready?</h4>
      <button className="intro__button" onClick={onClickStart}>
        <p>START</p>
      </button>
    </main>
  )
}

export default IntroView;
