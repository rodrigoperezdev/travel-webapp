import { Calendar } from "./Calendar";

export const DateInput = () => {
  return (
    <div className="search-form__date">
      <div>
        <h3 className="search-form__title">Date</h3>
      </div>
      <div className="search-form__input-container">
        <Calendar label={"Set date"} />
      </div>
    </div>
  );
};
