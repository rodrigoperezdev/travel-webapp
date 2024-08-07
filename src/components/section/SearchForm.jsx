import { useState } from "react";

import { ActivityInput } from "./ActivityInput";
import { DateInput } from "./DateInput";
import { LocationInput } from "./LocationInput";
import { SearchIcon } from "../graphics";

export const SearchForm = () => {
  const [location, setLocation] = useState("");
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState(null);

  return (
    <div className="search-form">
      <div className="search-form__container">
        <div className="search-form__inputs">
          <LocationInput location={location} setLocation={setLocation} />
          <ActivityInput activity={activity} setActivity={setActivity} />
          <DateInput setDate={setDate} />
        </div>
        <div className="search-form__search-button">
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
