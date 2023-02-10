import React from 'react'
import type ChatTextProps from '../../types/chatTextProps'

import styles from './chatText.module.scss'
function ChatText (props: ChatTextProps): JSX.Element {
  return (
       <div className={styles.box}>
            <div className={styles.name}>{props.name}</div>
            <div>{props.content}</div>
        </div>
  )
}

export default ChatText
