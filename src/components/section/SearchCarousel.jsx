export const SearchCarousel = () => {
  return (
    <div className="search-carousel">
      <div className="search-carousel__container">
        <div className="search-carousel__title">
          <p className="search-carousel__title-place">
            The Himalayan Mountain Ranges
          </p>
          <h1>Nepal Country</h1>
        </div>
        <div className="search-carousel__description">
          <div className="search-carousel__description-climate">
            <div>
              <p>-02° C Very Cold</p>
            </div>
            <button>
              <img src="src/assets/images/home/prev.svg" alt="Previous" />
            </button>
            <button>
              <img src="src/assets/images/home/next.svg" alt="Next" />
            </button>
          </div>

          <div className="search-carousel__cards">
            <div className="search-carousel__cards--icon">
              <img
                src="src/assets/images/home/credit-card-icon.svg"
                alt="Credit card"
              />
            </div>
            <div className="search-carousel__cards--description">
              <p>
                We Accept Payment Through <br></br>All Cards & Banking
              </p>
              <p className="text-bold text-underline">Book Now!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
