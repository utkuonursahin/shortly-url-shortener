import {useEffect, useState} from "react";

const ShortenerModal = ({data, setData}) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleCopy = async function (text){
    if('clipboard' in navigator) await navigator.clipboard.writeText(text)
    setIsClicked(!isClicked)
    setTimeout(() => {setData(false)},1000)
  }

  useEffect(() => {
    setTimeout(() => {setData(false)},10000)
  },[])

  return (
      <div className="shortener-modal">
        <p className="shortener-modal__long">{data.original_link}</p>
        <span/>
        <p className="shortener-modal__short">{data.full_short_link3}</p>
        <button className="btn btn-copy" onClick={() => handleCopy(data.full_short_link3)}>
          {`${isClicked ? 'Copied!' : 'Copy'}`}
        </button>
      </div>
  );
};

export default ShortenerModal;
