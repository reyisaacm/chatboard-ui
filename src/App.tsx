/* eslint-disable */

import React, { useState } from 'react'
import useWebSocket from 'react-use-websocket'
import styles from './App.module.scss'
import Button from './components/button/button.component'
import ChatText from './components/chatText/chatText.component'
import InputText from './components/inputText/inputText.component'
import TextArea from './components/textArea/textArea.component'
function App (): JSX.Element {
  const [socketUrl, setSocketUrl] = useState('wss://127.0.0.1:1323/ws')
  const [messageHistory, setMessageHistory] = useState([])

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl)

  const handleSendMessage = () => {
    alert('send message')
  }

  const handleSetTag = () => {
    alert('set tag')
  }
  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <h1>Chatboard</h1>
        <div className={styles.app__header__tags}>
          <InputText placeholder="Type your tag"/>
          <Button text="Set" onClickHandler={handleSetTag} />
        </div>
        <div className={styles.app__header__inputs}>
          <InputText placeholder="Type your name"/>
          <TextArea placeholder="Type your message"/>
          <Button text="Submit" onClickHandler={handleSendMessage} />
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
