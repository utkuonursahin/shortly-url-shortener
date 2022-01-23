import axios from "axios";

const handleSubmit = async function (e,setData,setIsClicked){
  try{
    e.preventDefault()
    const input =  e.currentTarget.children[0] //Choosing input
    if(!input.value) return
    setIsClicked(prev => !prev)
    const response = await axios(`https://api.shrtco.de/v2/shorten?url=${input.value}`)
    if(!response.data.ok) throw new Error("Something went wrong. Please try again later")
    setData(prev => [...prev,response.data.result])
    setIsClicked(prev => !prev)
    input.value = ''
  } catch(error){alert(error.message)}
}

export default handleSubmit;