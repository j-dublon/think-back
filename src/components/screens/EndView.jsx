import React, {useEffect} from "react";
import useData from '../../data/useData';

const correct = "17";
const errors = "3";

const EndView = () => {
  // ** ** ** ** HOOKS ** ** ** **
  const { userName, setCurrentPage } = useData();

  // ** ** ** ** LOCAL ** ** ** **
  // ** ** ** ** EFFECTS ** ** ** **
  useEffect(() => {
    setCurrentPage('end')
  }, [setCurrentPage])

  // ** ** ** ** LOGIC ** ** ** **
  // ** ** ** ** RENDER ** ** ** **
  return (
    <main className="end">
      <h2 className="end__title">{ `${userName}'s score:` }</h2>
      <h2 className="end__text">{ `Correct guesses: ${correct}` }</h2>
      <h2 className="end__text">{ `Errors: ${errors}` }</h2>
      <a href="/" className="end__button">TRY AGAIN?</a>
    </main>
  )
}

export default EndView;
