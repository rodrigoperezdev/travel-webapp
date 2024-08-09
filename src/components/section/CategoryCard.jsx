export const CategoryCard = ({
  rating,
  imgUrl,
  alt,
  title,
  activitiesNumber,
}) => {
  return (
    <div className="category-card">
      <div className="category-card__container">
        <div className="category-card__rating">
          <span>{rating}</span>
        </div>
        <div className="category-card__content">
          <img src={imgUrl} alt={alt} />
          <h4>{title}</h4>
          <p>{activitiesNumber} Activities</p>
        </div>
      </div>
    </div>
  );
};
