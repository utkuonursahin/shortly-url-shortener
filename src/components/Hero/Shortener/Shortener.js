import ShortenerModal from "./ShortenerModal/ShortenerModal";
import {useShortener} from "../../../context/ShortenerContext";
const Shortener = () => {
  const {data,getUrl} = useShortener()
  return (
      <section className="shortener">
        <form action="#" className="shortener__form" onSubmit={getUrl}>
          <input type="text" placeholder="Shorten a link here..." className="shortener__form-input"/>
          <button className="btn btn-cta">Shorten It!</button>
        </form>
        {data.length && <ShortenerModal/>}
      </section>
  );
};

export default Shortener;
