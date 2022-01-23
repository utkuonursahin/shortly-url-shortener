import {createContext, useContext, useState} from "react";

const ErrorContext = createContext()

const ErrorProvider = ({children}) => {
  const [error,setError] = useState()

  const values = {error,setError}
  return <ErrorContext.Provider value={values}>{children}</ErrorContext.Provider>
}
const useError = () => useContext(ErrorContext)
export {ErrorProvider, useError}