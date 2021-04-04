import {
  HeaderWrapper,
  Logo,
  NavigationBar,
  RightHeaderWrapper,
} from "./styles";
import ToggleSwitch from "components/ToggleSwitch";
import { ReactComponent as HamburgerIcon } from 'assets/images/hamburger.svg';
import { ReactComponent as CloseIcon } from 'assets/images/close.svg';
import { useState } from "react";

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <HeaderWrapper openDrawer={openDrawer}>
      <Logo />
      <HamburgerIcon onClick={() => setOpenDrawer(true)} />
      <RightHeaderWrapper openDrawer={openDrawer}>
        <CloseIcon onClick={() => setOpenDrawer(false)} />
        <ToggleSwitch />
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
