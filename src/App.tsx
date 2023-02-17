/* eslint-disable */

import React, { ChangeEvent, useEffect, useState } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import styles from './App.module.scss'
import Button from './components/button/button.component'
import ChatText from './components/chatText/chatText.component'
import InputText from './components/inputText/inputText.component'
import TextArea from './components/textArea/textArea.component'
function App (): JSX.Element {
  const socketUrl = 'wss://93d7-180-244-133-32.ap.ngrok.io/ws'
  // const socketUrl = 'wss://ws.postman-echo.com/raw'
  const [messageHistory, setMessageHistory] = useState([])

  const [tag, setTag] = useState("default")
  const [tagField, setTagField] = useState("default")
  const [nameField, setNameField] = useState("")
  const [messageField, setMessageField] = useState("")

  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl,{
    shouldReconnect: (): boolean => true,
    onClose:(e: CloseEvent): void =>{
      console.log("closed")
      console.log(e)
    },
    share: true
  })

  
  useEffect(() => {
    // if (lastMessage !== null) {
    //   setMessageHistory((prev) => prev.concat(lastMessage));
    // }
    console.log(lastMessage)
  }, [lastMessage, setMessageHistory]);
  
  const handleSendMessage = ():void => {
    let jsonMessage = {
      tag: tag,
      name: nameField,
      message: messageField
    }
    sendJsonMessage(jsonMessage)
  }

  const handleSetTag = ():void => {
    alert('set tag')
  }

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    if(name === "tag"){
      setTagField(value)
    } else  if(name === "message"){
      setMessageField(value)
    } else if(name === "name"){
      setNameField(value)
    }
    // setFormFields({ ...formFields, [name]: value })
    // console.log(event.target.value)
  }

  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <h1>Chatboard {connectionStatus}</h1>
        <div className={styles.app__header__tags}>
          <InputText name="tag" placeholder="Type your tag" value={tagField} onChangeHandler={handleChange}/>
          <Button text="Set" onClickHandler={handleSetTag} />
        </div>
        <div className={styles.app__header__inputs}>
          <InputText name="name" placeholder="Type your name" value={nameField} onChangeHandler={handleChange}/>
          <TextArea name="message" placeholder="Type your message" value={messageField} onChangeHandler={handleChange}/>
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
