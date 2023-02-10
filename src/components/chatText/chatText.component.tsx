import React from 'react'
import styles from './chatText.module.scss'
function ChatText (): JSX.Element {
  return (
       <div className={styles.box}>
            <div className={styles.name}>My name</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat fugiat, quis reiciendis natus tenetur voluptatum ex magni reprehenderit laudantium debitis consectetur minima ducimus quisquam, doloremque a in accusantium! Nisi, non.</div>
        </div>
  )
}

export default ChatText
