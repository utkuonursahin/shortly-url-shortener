import {useState} from "react";
import axios from "axios";
import ShortenerModal from "./ShortenerModal/ShortenerModal";
const Shortener = () => {
  const [data, setData] = useState(false)
  const shortUrl = async function (e){
    try{
      e.preventDefault()
      const input =  e.currentTarget.children[0] //Choosing input
      if(!input.value) return
      const response = await axios(`https://api.shrtco.de/v2/shorten?url=${input.value}`)
      if(!response.data.ok) throw new Error("Something went wrong. Please try again later")
      setData(response.data.result)
      input.value = ''
    } catch(error){alert(error.message)}
  }

  return (
      <section className="shortener">
        <form action="#" className="shortener__form" onSubmit={shortUrl}>
          <input type="text" placeholder="Shorten a link here..." className="shortener__form-input"/>
          <button className="btn btn-cta">Shorten It!</button>
        </form>
        {data && <ShortenerModal data={data} setData={setData}/>}
      </section>
  );
};

export default Shortener;
