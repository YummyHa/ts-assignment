import { ReactComponent as ToggleIcon } from "assets/images/toggle.svg";
import { ReactComponent as SunnyIcon } from "assets/images/sunny.svg";
import { ReactComponent as NightIcon } from "assets/images/night.svg";
import { SwitchWrapper } from "./styles";

function ToggleSwitch({ onSwitch }) {
  function onSwitchClicked() {
    onSwitch();
  }

  return (
    <SwitchWrapper onClick={onSwitchClicked} data-testid="toggle-switch">
      <ToggleIcon />
      <SunnyIcon />
      <NightIcon />
    </SwitchWrapper>
  );
}

export default ToggleSwitch;
