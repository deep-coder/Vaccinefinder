import React, { InputHTMLAttributes } from 'react'
import Style from './input.module.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { onChange } = rest
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div className={Style.inputWrapper}>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} onChange={(e) => onChange(e)}></input>
    </div>
  )
}

export default Input
