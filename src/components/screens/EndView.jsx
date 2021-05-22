import React, {useEffect} from "react";
import useData from '../../data/useData';
import { useNavigate } from "@reach/router"

const correct = "17";
const errors = "3";

const EndView = () => {
  // ** ** ** ** HOOKS ** ** ** **
  const { userName, setCurrentPage } = useData();
  const navigate = useNavigate();

  // ** ** ** ** LOCAL ** ** ** **
  // ** ** ** ** EFFECTS ** ** ** **
  useEffect(() => {
    setCurrentPage('end')
  }, [setCurrentPage])

  // ** ** ** ** LOGIC ** ** ** **
  const onClickEnd = () => {
    navigate('/');
   }
  
  // ** ** ** ** RENDER ** ** ** **
  return (
    <main className="end">
      <h2 className="end__title">{ `${userName}'s score:` }</h2>
      <h2 className="end__text">{ `Correct guesses: ${correct}` }</h2>
      <h2 className="end__text">{ `Errors: ${errors}` }</h2>
      <button className="end__button" onClick={onClickEnd}>
        <p>TRY AGAIN?</p>
      </button>
    </main>
  )
}

export default EndView;
