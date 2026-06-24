import React, { createContext } from 'react'

const mainContext = createContext()

export const iseMainContext = () =>useContext(mainContext)

export const mainContextProvider = ({childern}) => {
  return (
    <mainContext.Provider value ={{}}>{childern}</mainContext.Provider>
  )
}
