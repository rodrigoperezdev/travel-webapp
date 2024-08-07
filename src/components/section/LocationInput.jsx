import { useForm } from "../../hooks";
import { PinIcon } from "../graphics";

export const LocationInput = ({ setLocation }) => {
  const { formState, onInputChange, location } = useForm({ location: "" });

  const handleInputChange = (e) => {
    onInputChange(e);
    setLocation(location);
  };

  return (
    <div className="search-form__location">
      <div>
        <h3 className="search-form__title">Location</h3>
      </div>
      <div className="search-form__input-container">
        <input
          className="search-form__input"
          type="text"
          placeholder="Enter your destination"
          name="location"
          onChange={handleInputChange}
          value={location}
        />
        <PinIcon />
      </div>
    </div>
  );
};
