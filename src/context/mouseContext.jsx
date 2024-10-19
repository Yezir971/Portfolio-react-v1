import { createContext, useState } from 'react'

export const MouseContext = createContext()

export function MouseContextProvider(props) {
  const [cursorVariant, setCursorVariant] = useState('default')
  const textEnter = () => setCursorVariant("text")
  
  const textLeave = () => setCursorVariant("default")
  
  
  const textEnter2 = () => setCursorVariant("text2")
  const textLeave2 = () => setCursorVariant("default2")

  return (
    <MouseContext.Provider
      value={{ cursorVariant, setCursorVariant, textEnter, textLeave, textEnter2, textLeave2}}
    >
      {props.children}
    </MouseContext.Provider>
  )
}