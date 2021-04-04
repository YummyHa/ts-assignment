import styled from "styled-components";

const SwitchWrapper = styled.div`
  background: #555555;
  width: 50px;
  height: 24px;
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  svg {
    position: absolute;
  }

  svg:first-child {
    left: ${({ isToggle }) => (isToggle ? "26px" : 0)};
    transition: left 0.3s ease;
  }

  svg#sunny {
    display: ${({ isToggle }) => (isToggle ? "none" : "block")};
    right: 4px;
  }
  svg#night {
    display: ${({ isToggle }) => (isToggle ? "block" : "none")};
    left: 4px;
  }

  @media (max-width: 640px) {
    position: absolute;
    top: 16px;
    left: 16px;
  }
`;

export { SwitchWrapper };
