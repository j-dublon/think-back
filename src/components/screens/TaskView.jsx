import React, {useEffect, useState} from "react";
import Card from "../cards/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import useData from '../../data/useData';
import { useNavigate } from "@reach/router"

const TaskView = () => {
  // ** ** ** ** HOOKS ** ** ** **
  const { setCurrentPage, sequence } = useData();
  const navigate = useNavigate();

  // ** ** ** ** LOCAL ** ** ** **
  const [start, setStart] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);

  // ** ** ** ** EFFECTS ** ** ** **
  useEffect(() => {
    setCurrentPage('task')
  }, [setCurrentPage])

  // ** ** ** ** LOGIC ** ** ** **
  const onClickEnd = () => {
    navigate('/end')
  }

  const onClickStart = () => {
    setStart(true);
  }
  
  // ** ** ** ** RENDER ** ** ** **
  return (
    <main className="taskView">
      {
        start === true ? (
          <>
            <Card letter={sequence[letterIndex]}/>
            <button className="taskView__button">
              <FontAwesomeIcon icon={faCheckCircle} size="6x" color="#13070C" className="taskView__button__icon"/>
            </button>
          </>
        )
          :
        (
          <button className="taskView__button__start" onClick={onClickStart}>
              <p className="taskView__button__start__text">START</p>
          </button>
        )
      }
      
      <button className="fake__button" onClick={onClickEnd}>
        <p>END</p>
      </button>

    </main>
  )
}

export default TaskView;
