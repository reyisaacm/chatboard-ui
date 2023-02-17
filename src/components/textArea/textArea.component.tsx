import React from 'react'
import type TextAreaProps from '../../types/textAreaProps'
import styles from './textArea.module.scss'

function TextArea (props: TextAreaProps): JSX.Element {
  return (
        <textarea className={styles['text-area']} name={props.name} rows={5} placeholder={props.placeholder}>{props.value}</textarea>
  )
}

export default TextArea
