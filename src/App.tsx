import React from 'react'
import './App.module.scss'
import Button from './components/button.component'
function App (): JSX.Element {
  return (
    <div className="app">
      <div className="app__header">
        <h1>Chatboard</h1>
        <input type="text" placeholder='Type your tag' />
        <Button />
      </div>
      <div className="app__body">
          This is the app body
      </div>
    </div>
  )
}

export default App
