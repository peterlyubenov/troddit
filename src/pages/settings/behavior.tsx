import React from "react";
import IntInput from "../../components/settings/IntInput";
import Settings from "../../components/settings/Settings";
import Toggles from "../../components/settings/Toggles";

const BehaviorSettings = () => {
  const behaviorToggles = [
    "autoRead",
    "autoSeen",
    "infiniteLoading",
    "autoRefreshFeed",
    "refreshOnFocus",
    "askToUpdateFeed",
    "autoRefreshComments",
  ] as const;
  const behaviorIntegers = [
    "slowRefreshInterval",
    "fastRefreshInterval",
  ] as const;

  return (
    <Settings>
      {behaviorToggles.map((toggleName) => (
        <Toggles
          key={toggleName}
          setting={toggleName}
          withSubtext={true}
          externalStyles="rounded-lg group hover:bg-th-highlight p-2 cursor-pointer"
        />
      ))}
      {behaviorIntegers.map((integerName) => (
        <IntInput key={integerName} setting={integerName} />
      ))}
    </Settings>
  );
};

export default BehaviorSettings;
