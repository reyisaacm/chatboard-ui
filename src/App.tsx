import React from 'react'
import styles from './App.module.scss'
import Button from './components/button/button.component'
import InputText from './components/inputText/inputText.component'
function App (): JSX.Element {
  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <h1>Chatboard</h1>
        <div className={styles.app__header__tags}>
          <InputText placeholder="Type your tag"/>
          <Button text="Set" />
        </div>
        <InputText placeholder="Type your name"/>
      </div>
      <div className={styles.app__body}>
          This is the app body
      </div>
    </div>
  )
}

export default App
