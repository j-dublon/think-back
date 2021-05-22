import React, {useEffect} from "react";
import Card from "../cards/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import useData from '../../data/useData';
import { useNavigate } from "@reach/router"

const TaskView = () => {
  // ** ** ** ** HOOKS ** ** ** **
  const { setCurrentPage } = useData();
    const navigate = useNavigate();

  // ** ** ** ** LOCAL ** ** ** **
  // ** ** ** ** EFFECTS ** ** ** **
  useEffect(() => {
    setCurrentPage('task')
  }, [setCurrentPage])

  // ** ** ** ** LOGIC ** ** ** **
  const onClickEnd = () => {
    navigate('/end')
  }
  
  // ** ** ** ** RENDER ** ** ** **
  return (
    <main className="taskView">
      <Card />
      <section className="taskView__iconContainer">
        <button className="taskView__button">
          <FontAwesomeIcon icon={ faTimesCircle } size="6x" color="#13070C" className="taskView__button__icon"/>
        </button>
        <button className="taskView__button">
          <FontAwesomeIcon icon={faCheckCircle} size="6x" color="#13070C" className="taskView__button__icon"/>
        </button>
      </section>

      <button className="end__button" onClick={onClickEnd}>
        <p>END</p>
      </button>

    </main>
  )
}

export default TaskView;
