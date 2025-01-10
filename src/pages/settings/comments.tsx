import React from "react";
import DefaultSortSelector from "../../components/settings/DefaultSortSelector";
import Settings from "../../components/settings/Settings";
import Toggles from "../../components/settings/Toggles";

const CommentsSettings = () => {
  const commentsToggles = [
    "showUserIcons",
    "showUserFlairs",
    "autoCollapseComments",
    "ribbonCollapseOnly",
    "collapseChildrenOnly",
    "defaultCollapseChildren",
  ] as const;

  return (
    <Settings>
      {commentsToggles.map((toggleName) => (
        <Toggles
          key={toggleName}
          setting={toggleName}
          withSubtext={true}
          externalStyles={
            "rounded-lg group hover:bg-th-highlight p-2 cursor-pointer"
          }
        />
      ))}
      <label
        key={"defaultSortComments"}
        className="flex flex-row items-center justify-between w-full p-2 my-2 hover:cursor-pointer"
      >
        <span className="flex flex-col gap-0.5">
          <span>Default Comment Sort</span>
          <span className="mr-2 text-xs opacity-70">
            Default sort order for Comments on Posts
          </span>
        </span>
        <div className="flex-none min-w-[6rem]">
          <DefaultSortSelector mode="comments" />
        </div>
      </label>
    </Settings>
  );
};

export default CommentsSettings;
