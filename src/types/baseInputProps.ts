import { type ChangeEvent } from 'react'

interface BaseInputProps {
  placeholder: string
  value: string
  name: string
  onChangeHandler?: (event: ChangeEvent<HTMLInputElement>) => void
}
export default BaseInputProps
