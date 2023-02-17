/* eslint-disable */

import React, { useEffect, useState } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import styles from './App.module.scss'
import Button from './components/button/button.component'
import ChatText from './components/chatText/chatText.component'
import InputText from './components/inputText/inputText.component'
import TextArea from './components/textArea/textArea.component'
function App (): JSX.Element {
  const [socketUrl, setSocketUrl] = useState('wss://a336-36-66-131-234.ap.ngrok.io/ws')
  const [messageHistory, setMessageHistory] = useState([])

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl)

  
  useEffect(() => {
    // if (lastMessage !== null) {
    //   setMessageHistory((prev) => prev.concat(lastMessage));
    // }
    console.log(lastMessage)
  }, [lastMessage, setMessageHistory]);
  
  const handleSendMessage = () => {
    alert('send message')
  }

  const handleSetTag = () => {
    alert('set tag')
  }

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];
  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <h1>Chatboard {connectionStatus}</h1>
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
