import React from 'react'
import type InputTextProps from '../../types/inputTextProps'
import styles from './inputText.module.scss'

function InputText (props: InputTextProps): JSX.Element {
  return (
        <input type="text" onChange={props.onChangeHandler} placeholder={props.placeholder} value={props.value} name={props.name} className={styles['input-text']} />
  )
}

export default InputText
