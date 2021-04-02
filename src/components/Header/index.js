import {
  HeaderWrapper,
  Logo,
  NavigationBar,
  RightHeaderWrapper,
} from "./styles";
import ToggleSwitch from "components/ToggleSwitch";

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <RightHeaderWrapper>
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
