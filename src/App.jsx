import './App.css'
import TodoContainer from './components/TodoContainer'
import datos from './store/db'
function App() {

  return (
    <div className='container'>
      <TodoContainer listaDatos={datos} title={'Prueba'} />
      {/* <TodoContainer listaDatos={[]} title={'Estudios'} /> */}

    </div>
  )
}

export default App
