import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
//Importamos la hoja de estilos de task
import "../../styles/task.scss";
import { Levels } from "../../models/leves.enum";

const TaskComponent = ({ task }) => {
    useEffect(() => {
        console.log("Created task");
        return () => {
            console.log(`Task:${task.name} is going to unmount `);
        };
    }, [task]);


    /**
     * Function que retorna un Badge
     * dependiendo del nivel de la task
     */
    function taskLevelBadge() {
        switch (task.level) {
            case Levels.NORMAL:
                return (
                    <h6 className='mb-0 '>
                        <span className='badge bg-primary'>{task.level}</span>
                    </h6>
                );
            case Levels.URGENT:
                return (
                    <h6 className='mb-0 '>
                        <span className='badge bg-warning'>{task.level}</span>
                    </h6>
                );
            case Levels.BLOCKING:
                return (
                    <h6 className='mb-0 '>
                        <span className='badge bg-danger'>{task.level}</span>
                    </h6>
                );
            default:
                break;
        }
    }
    /**
     * Function que retorna el icono dependiendo el estado de la tarea (completa o incompleta)
     */
    function taskCompletedIcon(){
      if(task.completed){
        return <i className='bi-toggle-on' style={{ color: "green" }}></i>
      }else{
        return <i className='bi-toggle-off' style={{ color: "grey" }}></i>
      }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* TODO: Sustituir por un badge */}
                {/* <span>{task.level}</span> */}
                {/* Ejecucion de la funcion que retorna el elemento badge */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* TODO: Sustituir por un Iconos */}
                {/* Ejecucion de la funcion dependiendo del estado de la task  */}
                {taskCompletedIcon()}
                <i className='bi-trash' style={{ color: "tomato" }}></i>
                {/* <span>{task.completed ? "COMPLETED" : "PENDING"}</span> */}
            </td>
        </tr>

        // <div>
        //   <h2 className="task-name">Nombre: {task.name}</h2>
        //   <h3>Descripción: {task.description}</h3>
        //   <h4>Level: {task.level}</h4>
        //   <h5>This task is: {task.completed ? "COMPLETED" : "PENDING"}</h5>
        // </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
