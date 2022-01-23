import axios from "axios";

const timeout = (sec) => new Promise(reject => setTimeout(() => reject(new Error('request took too long')), sec * 1000))

const getUrl = async function (url){
  try{
    const response = await Promise.race([axios(url),timeout(10)])
    if(!response.data?.ok || response.ok) throw new Error(`Something went wrong (${response.message}). Please try again later`)
  } catch(error){throw error}
}

const handleSubmit = async function (e,setData,setIsClicked,setError){
  try{
    e.preventDefault()
    const input =  e.currentTarget.children[0] //choosing input
    if(!input.value) return
    setIsClicked(prev => !prev) //render spinner
    const response = await getUrl(`https://api.shrtco.de/v2/shorten?url=${input.value}`)
    setData(prev => [...prev,response.data.result])
    setIsClicked(prev => !prev) //remove spinner
    input.value = ''
  } catch(error){
    setIsClicked(prev => !prev) //remove spinner
    setError(error.message)
  }
}

export default handleSubmit;