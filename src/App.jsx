import './App.css'
import TodoContainer from './components/TodoContainer'
import datos from './store/db'
function App() {

  return (
    <div className='container'>
      <TodoContainer listaDatos={datos} title={'Pendientes'} />
      <TodoContainer listaDatos={[]} title={'En trabajo'} />

    </div>
  )
}

export default App
