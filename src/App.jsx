import React from 'react'
import './styles/App.scss'
import Board from './components/board'
import AppState from './context/AppState'
function App() {

  return (
    <div className="App">
      <AppState>
      <Board></Board>
      </AppState>
    </div>
  )
}

export default App
