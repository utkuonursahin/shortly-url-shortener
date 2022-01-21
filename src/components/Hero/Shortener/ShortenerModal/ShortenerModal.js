import ShortenerPopup from "./ShortenerPopup/ShortenerPopup";
import {useShortener} from "../../../../context/ShortenerContext";

const ShortenerModal = () => {
  const {data} = useShortener()

  return (
      <ul className="shortener-modal">
        {data.map(element => <ShortenerPopup key={element.code} element={element}/>)}
      </ul>
  );
};

export default ShortenerModal;
