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
  z-index: 3;

  svg#hamburger {
    display: none;
    cursor: pointer;
    rect {
      fill: #fff;
    }

    @media (max-width: 640px) {
      display: ${({openDrawer}) => openDrawer ? 'none' : 'block'};;
      margin-right: 16px;
    }
  }
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

  svg#close {
    display: none;
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    path {
      fill: #fff;
    }
  }

  @media (max-width: 640px) {
    display: block;
    position: absolute;
    top: 0;
    right: ${({openDrawer}) => openDrawer ? '0' : '-300px'};
    width: 300px;
    height: 100vh;
    z-index: 4;
    background: rgba(0, 0, 0, .85);
    transition: right ease .3s;

    svg#close {
      display: block;
    }

    ul {
      margin-top: 60px;
    }

    li {
      float: none;
      width: 100%;
      text-align: right;
      padding: 16px 0;
    }
  }
`;

export {
  HeaderWrapper,
  Logo,
  NavigationBar,
  RightHeaderWrapper
}
