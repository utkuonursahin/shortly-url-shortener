import {useEffect, useState} from 'react';
import {useShortener} from "../../../../../context/ShortenerContext";

const ShortenerPopup = ({element}) => {
  const {setData} = useShortener()
  const [isClicked, setIsClicked] = useState(false)
  let timeout
  const handleCopy = async function (text){
    if('clipboard' in navigator) await navigator.clipboard.writeText(text)
    setIsClicked(!isClicked)
    clearTimeout(timeout)
    setTimeout(() => {
      setData(prevState => prevState.filter(el => el.code !== element.code))
    },1000)
  }

  useEffect(() => {
    timeout = setTimeout(() => {
      setData(prevState => prevState.filter(el => el.code !== element.code))
    },10000)
  },[])

  return (
      <li className="shortener-popup">
        <p className="shortener-popup__long">{element.original_link}</p>
        <p className="shortener-popup__short">{element.full_short_link3}</p>
        <span/>
        <button className="btn btn-copy" onClick={() => handleCopy(element.full_short_link3)}>
          {`${isClicked ? 'Copied!' : 'Copy'}`}
        </button>
      </li>
  );
};

export default ShortenerPopup;
