import React from "react";
import ColumnCardOptions from "../../components/settings/ColumnCardOptions";
import Settings from "../../components/settings/Settings";
import Toggles from "../../components/settings/Toggles";

const LayoutSettings = () => {
  const layoutToggles = [
    "expandedSubPane",
    "autoHideNav",
    "uniformHeights",
    "wideUI",
    "postWideUI",
    "preferSideBySide",
    "disableSideBySide",
  ] as const;
  return (
    <Settings>
      <label
        key={"column_count"}
        className="flex flex-row items-center justify-between w-full p-2 my-2 hover:cursor-pointer"
      >
        <span className="flex flex-col gap-0.5">
          <span>Column Count</span>
          <span className="mr-2 text-xs opacity-70">
            Sets column count in your feeds. "Auto" changes columns by window
            width
          </span>
        </span>
        <div className="flex-none w-24">
          <ColumnCardOptions mode="columns" />
        </div>
      </label>

      {layoutToggles.map((toggleName) => (
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

export default LayoutSettings;
