import React from "react";
import FilterEntities from "../../components/settings/FilterEntities";
import Settings from "../../components/settings/Settings";
import ToggleFilters from "../../components/ToggleFilters";

const FiltersSettings = () => {
  const filtersToggles = [
    "self",
    "links",
    "images",
    "videos",
    "portrait",
    "landscape",
    "read",
    "seen",
  ] as const;

  return (
    <Settings>
      {filtersToggles.map((toggleName) => (
        <div key={toggleName}>
          <ToggleFilters
            filter={toggleName}
            withSubtext={true}
            quickToggle={true}
          />
        </div>
      ))}
      <div key="other_filters" className="py-1">
        <FilterEntities />
      </div>
    </Settings>
  );
};

export default FiltersSettings;
