import {createContext, useContext, useState} from "react";

const ShortenerContext = createContext()

const ShortenerProvider = ({children}) => {
  const [data, setData] = useState([])
  const [isClicked, setIsClicked] = useState(false)

  const values = {data,setData,isClicked, setIsClicked}
  return <ShortenerContext.Provider value={values}>{children}</ShortenerContext.Provider>
}
const useShortener = () => useContext(ShortenerContext)
export {ShortenerProvider, useShortener}