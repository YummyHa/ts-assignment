import styled from 'styled-components';
import backgroundImg from 'assets/images/background.png';

const Banner = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100%;
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.varibles.backdrop};
    z-index: 1;
  }
`;

export {
  Banner
}
