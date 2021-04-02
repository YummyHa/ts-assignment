import React, { useState } from "react";
import { ReactComponent as ToggleIcon } from "assets/images/toggle.svg";
import { ReactComponent as SunnyIcon } from "assets/images/sunny.svg";
import { ReactComponent as NightIcon } from "assets/images/night.svg";
import { useTheme } from "theme/useTheme";
import { SwitchWrapper } from "./styles";
import { getFromLS } from "utils/storage";

function ToggleSwitch() {
  const allThemes = getFromLS("all-themes");
  const localTheme = getFromLS("theme");

  const { setMode } = useTheme();
  const [isToggle, setIsToggle] = useState(localTheme.mode === "dark" || false);

  function onSwitch() {
    setMode(isToggle ? allThemes.light : allThemes.dark);
    setIsToggle(!isToggle);
  }

  return (
    <SwitchWrapper onClick={onSwitch} isToggle={isToggle}>
      <ToggleIcon />
      <SunnyIcon />
      <NightIcon />
    </SwitchWrapper>
  );
}

export default ToggleSwitch;
