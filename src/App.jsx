import React from 'react'
import './App.css'
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
