import ShortenerModal from "./ShortenerModal/ShortenerModal";
import {useShortener} from "../../../context/ShortenerContext";
import handleSubmit from "../../../helpers";
import {useError} from "../../../context/ErrorContext";

const Shortener = () => {
  const {data, setData, isClicked, setIsClicked} = useShortener()
  const {setError} = useError()
  return (
      <section className="shortener">
        <form action="#" className="shortener__form" onSubmit={(e) => handleSubmit(e,setData,setIsClicked,setError)}>
          <input type="text" placeholder="Shorten a link here..." className="shortener__form-input"/>
          <button className="btn btn-cta">
            {isClicked ?
                <svg className="spinner">
                  <use href="./images/sprite.svg#icon-spinner"/>
                </svg> : 'Shorten It!'
            }
          </button>
        </form>
        {data.length && <ShortenerModal/>}
      </section>
  );
};

export default Shortener;
