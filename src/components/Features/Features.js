const Features = () => {
  return (
      <section className="features">
        <h2 className="features__heading heading-2">Advanced Statistics</h2>
        <p className="features__description">
          Track how your links are performing across the web with our
          advanced statistics dashboard.
        </p>

        <div className="features__cards">
          <div className="card">
            <picture className="card__icon">
              <svg>
                <use href="./images/sprite.svg#icon-brand-recognition"/>
              </svg>
            </picture>
            <h3 className="heading-3">Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your content.
            </p>
          </div>

          <div className="card">
            <picture className="card__icon">
              <svg>
                <use href="./images/sprite.svg#icon-detailed-records"/>
              </svg>
            </picture>
            <h3 className="heading-3">Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and where
              people engage with your content helps inform better decisions.
            </p>
          </div>

          <div className="card">
            <picture className="card__icon">
              <svg>
                <use href="./images/sprite.svg#icon-fully-customizable"/>
              </svg>
            </picture>
            <h3 className="heading-3">Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through customizable
              links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
  );
};

export default Features;
