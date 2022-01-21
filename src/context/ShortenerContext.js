import {createContext, useContext, useState} from "react";
import axios from "axios";

const ShortenerContext = createContext()

const ShortenerProvider = ({children}) => {
  const [data, setData] = useState([])

  const getUrl = async function (e){
    try{
      e.preventDefault()
      const input =  e.currentTarget.children[0] //Choosing input
      if(!input.value) return
      const response = await axios(`https://api.shrtco.de/v2/shorten?url=${input.value}`)
      if(!response.data.ok) throw new Error("Something went wrong. Please try again later")
      setData(prev => [...prev,response.data.result])
      input.value = ''
    } catch(error){alert(error.message)}
  }

  const values = {data,setData,getUrl}
  return <ShortenerContext.Provider value={values}>{children}</ShortenerContext.Provider>
}
const useShortener = () => useContext(ShortenerContext)
export {ShortenerProvider, useShortener}