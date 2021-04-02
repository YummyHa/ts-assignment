import styled from 'styled-components';
import { ReactComponent as AirbnbLogo } from 'assets/images/airbnb-logo.svg';

const HeaderWrapper = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const Logo = styled(AirbnbLogo)`
  padding: 16px;
`;

const NavigationBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  li {
    float: left;
    a {
      color: #fff;
      padding: 16px;
      text-align: center;
      text-decoration: none;
      font-weight: 400;

      &:hover {
        text-decoration: underline;
        color: blue;
      }
    }
  }
`;

const RightHeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  div:first-child {
    margin-right: 16px;
  }
`;

export {
  HeaderWrapper,
  Logo,
  NavigationBar,
  RightHeaderWrapper
}
