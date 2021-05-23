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
    if (letterIndex === 20) navigate('/end');
  }, [letterIndex, navigate])
  
  // ** ** ** ** RENDER ** ** ** **
  return (
    <main className="taskView">
      <Card letter={sequence[letterIndex]}/>
      <button className="taskView__button">
        <FontAwesomeIcon icon={faCheckCircle} size="6x" color="#13070C" className="taskView__button__icon"/>
      </button>
    </main>
  )
}

export default TaskView;
