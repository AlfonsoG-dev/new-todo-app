import './App.css'
import TodoContainer from './components/tarea/TodoContainer'
import datos from './store/db'
function App() {
  return (
    <div className='container'>
      <TodoContainer title={'Prueba'} />
      {/* <TodoContainer listaDatos={[]} title={'Estudios'} /> */}
      {/* TODO// panel de creación de todocontainer para crear espacios de trabajo */}
    </div>
  )
}

export default App
