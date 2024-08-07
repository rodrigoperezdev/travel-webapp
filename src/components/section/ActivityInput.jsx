import { useForm } from "../../hooks";
import { ActivityIcon } from "../graphics";

export const ActivityInput = ({ setActivity }) => {
  const { formState, onInputChange, activity } = useForm({ activity: "" });

  const handleInputChange = (e) => {
    onInputChange(e);
    setActivity(activity);
  };

  return (
    <div className="search-form__activity">
      <div>
        <h3 className="search-form__title">Activity</h3>
      </div>
      <div>
        <div className="search-form__input-container">
          <input
            className="search-form__input"
            type="text"
            placeholder="Bungee Jump"
            name="activity"
            onChange={handleInputChange}
            value={activity}
          />
          <ActivityIcon />
        </div>
      </div>
    </div>
  );
};
