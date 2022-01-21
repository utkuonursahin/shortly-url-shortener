import Shortener from "./Shortener/Shortener";
import {ShortenerProvider} from "../../context/ShortenerContext";

const Hero = () => {
  return (
      <section className="hero">
        <picture className="hero__illustration">
          <img src="./images/illustration-working.svg" alt="Illustration working"/>
        </picture>
        <h1 className="heading-1">More than just shorter links</h1>
        <p className="hero__description">Build your brand's recognition and get detailed
          insights on how your links are performing
        </p>
        <button className="btn btn-cta">Get Started</button>
        <ShortenerProvider>
          <Shortener/>
        </ShortenerProvider>
      </section>
  );
};

export default Hero;
