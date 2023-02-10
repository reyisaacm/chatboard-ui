import React from 'react'
import styles from './App.module.scss'
import Button from './components/button/button.component'
import ChatText from './components/chatText/chatText.component'
import InputText from './components/inputText/inputText.component'
import TextArea from './components/textArea/textArea.component'
function App (): JSX.Element {
  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <h1>Chatboard</h1>
        <div className={styles.app__header__tags}>
          <InputText placeholder="Type your tag"/>
          <Button text="Set" />
        </div>
        <div className={styles.app__header__inputs}>
          <InputText placeholder="Type your name"/>
          <TextArea placeholder="Type your message"/>
          <Button text="Submit" />
        </div>

      </div>
      <div className={styles.app__body}>
          <ChatText name="My name" content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat fugiat, quis reiciendis natus tenetur voluptatum ex magni reprehenderit laudantium debitis consectetur minima ducimus quisquam, doloremque a in accusantium! Nisi, non.'/>
          <ChatText name="My name" content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat fugiat, quis reiciendis natus tenetur voluptatum ex magni reprehenderit laudantium debitis consectetur minima ducimus quisquam, doloremque a in accusantium! Nisi, non.'/>
      </div>
    </div>
  )
}

export default App
