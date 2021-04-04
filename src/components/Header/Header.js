import { useState } from "react";
import {
  HeaderWrapper,
  Logo,
  NavigationBar,
  RightHeaderWrapper,
} from "./styles";
import { ToggleSwitch } from "components";
import { ReactComponent as HamburgerIcon } from "assets/images/hamburger.svg";
import { ReactComponent as CloseIcon } from "assets/images/close.svg";
import { getFromLS } from "utils/storage";
import { useTheme } from 'theme/useTheme';

function Header() {
  const localTheme = getFromLS("theme");
  const allThemes = getFromLS("all-themes");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isToggle, setIsToggle] = useState(
    (localTheme && localTheme.mode === "dark") || false
  );
  const { setMode } = useTheme();

  function onSwitch() {
    setMode(isToggle ? allThemes.light : allThemes.dark);
    setIsToggle(!isToggle);
  }

  return (
    <HeaderWrapper openDrawer={openDrawer}>
      <Logo />
      <HamburgerIcon onClick={() => setOpenDrawer(true)} />
      <RightHeaderWrapper openDrawer={openDrawer}>
        <CloseIcon onClick={() => setOpenDrawer(false)} />
        <ToggleSwitch onSwitch={onSwitch} isToggle={isToggle} />
        <NavigationBar>
          <li>
            <a href="/">Become a host</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <a href="/">Sign up</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </NavigationBar>
      </RightHeaderWrapper>
    </HeaderWrapper>
  );
}

export default Header;
