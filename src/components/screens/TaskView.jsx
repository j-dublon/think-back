import React, {useEffect} from "react";
import Card from "../cards/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import useData from '../../data/useData';

const TaskView = () => {
  // ** ** ** ** HOOKS ** ** ** **
  const { setCurrentPage } = useData();

  // ** ** ** ** LOCAL ** ** ** **
  // ** ** ** ** EFFECTS ** ** ** **
  useEffect(() => {
    setCurrentPage('task')
  }, [])

  // ** ** ** ** LOGIC ** ** ** **
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
    </main>
  )
}

export default TaskView;
