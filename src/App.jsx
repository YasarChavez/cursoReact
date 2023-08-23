import './App.css'
import TaskListComponent from './components/Container/task_list'
import Greeting from './components/pure/greeting'
import GreetingF from './components/pure/greetingF'
import Ejemplo1 from './hooks/Ejemplo1'
import Ejemplo2 from './hooks/Ejemplo2'
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4'

function App() {
  return (
    <>
    {/* <Greeting name="Yasar"/> */}
    {/* <GreetingF name="Yasar"/> */}
    {/* Componente de listado de tareas */}
    {/* <TaskListComponent></TaskListComponent> */}
    {/* Ejemplos de uso de HOOKS */}
    {/* <Ejemplo1></Ejemplo1> */}
    {/* <Ejemplo2></Ejemplo2> */}
    {/*  */}
    {/* <MiComponenteConContexto/> */}
    <Ejemplo4 nombre='Yasar'>
      {/* Todo lo que hay aqui, es tratado como props.children */}
      <h3>
        Contenido del props.children
      </h3>
    </Ejemplo4>
    </>
  )
}

export default App
