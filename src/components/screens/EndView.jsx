import React, {useEffect} from "react";
import useData from '../../data/useData';
import { useNavigate } from "@reach/router"

const EndView = () => {
  // ** ** ** ** HOOKS ** ** ** **
  const {
    userName,
    setCurrentPage,
    misses,
    setMisses,
    falseAlarms,
    setFalseAlarms,
    matches,
    setMatches,
    setExpectedMatches
  } = useData();
  const navigate = useNavigate();

  // ** ** ** ** LOCAL ** ** ** **
  // ** ** ** ** EFFECTS ** ** ** **
  useEffect(() => {
    setCurrentPage('end')
  }, [setCurrentPage])

  // ** ** ** ** LOGIC ** ** ** **
  const onClickEnd = () => {
    setMisses(0);
    setFalseAlarms(0);
    setMatches(0);
    setExpectedMatches(0);
    navigate('/');
   }
  
  // ** ** ** ** RENDER ** ** ** **
  return (
    <main className="end">
      <h2 className="end__title">{ `${userName}'s score:` }</h2>
      <h2 className="end__text">{ `Correct guesses: ${matches}` }</h2>
      <h2 className="end__text">{ `Errors: ${misses + falseAlarms}` }</h2>
      <button className="end__button" onClick={onClickEnd}>
        <p>TRY AGAIN?</p>
      </button>
    </main>
  )
}

export default EndView;
