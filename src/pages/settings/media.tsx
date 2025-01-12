import React from "react";
import Settings from "../../components/settings/Settings";
import Toggles from "../../components/settings/Toggles";

const MediaSettings = () => {
  const mediaToggles = [
    "disableEmbeds",
    "disableOverlay",
    "preferEmbeds",
    "embedsEverywhere",
    "autoplay",
    "hoverplay",
    "audioOnHover",
    "nsfw",
  ] as const;

  return (
    <Settings>
      {mediaToggles.map((toggleName) => (
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
export default MediaSettings;
