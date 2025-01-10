import React from "react";
import CardStyleDemo from "../../components/settings/CardStyleDemo";
import ColumnCardOptions from "../../components/settings/ColumnCardOptions";
import Settings from "../../components/settings/Settings";
import ThemeSelector from "../../components/settings/ThemeSelector";
import Toggles from "../../components/settings/Toggles";

const AppearanceSettings = () => {
  const appearanceToggles = [
    "compactLinkPics",
    "dimRead",
    "showAwardings",
    "showFlairs",
  ] as const;
  return (
    <Settings>
      <label
        key={"theme"}
        className="flex flex-row items-center justify-between w-full p-2 my-2 hover:cursor-pointer"
      >
        <span className="flex flex-col gap-0.5">
          <span>Theme</span>
          <span className="mr-2 text-xs opacity-70">
            Select a theme. System defaults to light or dark from your system
            settings.
          </span>
        </span>
        <div className="flex-none w-24">
          <ThemeSelector />
        </div>
      </label>
      <label
        key={"card_style"}
        className="flex flex-row items-center justify-between w-full p-2 my-2 hover:cursor-pointer"
      >
        <span className="flex flex-col gap-0.5">
          <span>Card Style</span>
          <span className="mr-2 text-xs opacity-70">
            <CardStyleDemo />
          </span>
        </span>
        <div className="flex-none w-24">
          <ColumnCardOptions mode="cards" />
        </div>
      </label>
      {appearanceToggles.map((toggleName) => (
        <Toggles
          key={toggleName}
          setting={toggleName}
          withSubtext={true}
          externalStyles="rounded-lg group hover:bg-th-highlight p-2 cursor-pointer"
        />
      ))}
    </Settings>
  );
};
export default AppearanceSettings;
