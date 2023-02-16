import React from 'react'
import type ButtonProps from '../../types/buttonProps'
import styles from './button.module.scss'

function Button (props: ButtonProps): JSX.Element {
  return (
        <button onClick={props.onClickHandler} className={styles.button}>{props.text}</button>
  )
}

export default Button
