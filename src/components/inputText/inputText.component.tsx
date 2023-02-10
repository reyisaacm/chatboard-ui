import React from 'react'
import type InputTextProps from '../../types/inputTextProps'
import styles from './inputText.module.scss'

function InputText (props: InputTextProps): JSX.Element {
  return (
        <input type="text" placeholder={props.placeholder} className={styles['input-text']} />
  )
}

export default InputText
