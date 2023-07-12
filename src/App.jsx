import './App.css'
import TodoContainer from './components/TodoContainer'
import datos from './store/db'
function App() {
  const listaDatos = datos.slice()
  return (
    <div className='container'>
      <TodoContainer listaDatos={listaDatos} title={'Prueba'} />
      {/* <TodoContainer listaDatos={[]} title={'Estudios'} /> */}
      {/* TODO// panel de creación de todocontainer para crear espacios de trabajo */}
    </div>
  )
}

export default App
