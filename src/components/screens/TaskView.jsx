import React, {useEffect, useState} from "react";
import Card from "../cards/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import useData from '../../data/useData';
import { useNavigate } from "@reach/router"

const TaskView = () => {
  // ** ** ** ** HOOKS ** ** ** **
  const {
    setCurrentPage,
    sequence,
    matches,
    setMatches,
    falseAlarms,
    setFalseAlarms,
    expectedMatches,
    setExpectedMatches,
    setMisses,
    misses
  } = useData();
  const navigate = useNavigate();

  // ** ** ** ** LOCAL ** ** ** **
  const [letterIndex, setLetterIndex] = useState(0);
  

  // ** ** ** ** EFFECTS ** ** ** **
  useEffect(() => {
    setCurrentPage('task')
  }, [setCurrentPage])

  useEffect(() => {
    let timer = setInterval(() => {
      setLetterIndex(prev => prev + 1)
    }, 2000);

    return () => clearInterval(timer);
  }, [setLetterIndex])

  useEffect(() => {
    if (sequence[letterIndex] === sequence[letterIndex - 2]) {
      setExpectedMatches(prev => prev + 1);
    }
  }, [sequence, letterIndex, setExpectedMatches])

  useEffect(() => {
    if (letterIndex === 20) {
      const missesMade = expectedMatches - matches;
      setMisses(missesMade);

      navigate('/end');
    };
  }, [letterIndex, navigate, expectedMatches, matches, setMisses])

  // ** ** ** ** LOGIC ** ** ** **
  const onClickButton = () => {
    console.log(sequence[letterIndex], sequence[letterIndex - 2], "<---current letter, 2 back");
    console.log('matches:', matches, 'misses:', misses, 'falseAlarms:', falseAlarms)

    if (letterIndex < 2 || sequence[letterIndex] !== sequence[letterIndex - 2]) {
      setFalseAlarms(prev => prev + 1);
    }
    if (sequence[letterIndex] === sequence[letterIndex - 2]) {
      setMatches(prev => prev + 1);
    }
  }
  
  // ** ** ** ** RENDER ** ** ** **
  return (
    <main className="taskView">
      <Card letter={sequence[letterIndex]}/>
      <button className="taskView__button" onClick={onClickButton}>
        <FontAwesomeIcon icon={faCheckCircle} color="#13070C" className="taskView__button__icon"/>
      </button>
    </main>
  )
}

export default TaskView;
