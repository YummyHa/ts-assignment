import styled from "styled-components";

const AutoCompleteWrapper = styled.div`
  width: 600px;
  height: 60px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.varibles.inputBackground};
  border: 1px solid ${({ theme }) => theme.varibles.borderColor};
  ${({ showDropdown }) => (showDropdown ? "border-bottom: none;" : "")};
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: ${({ showDropdown }) =>
    showDropdown ? "4px 4px 0 0" : "4px"};
  display: flex;
  align-items: center;
  z-index: 2;
  padding: 16px;

  svg path {
    fill: ${({ theme }) => theme.varibles.inputColor};
  }

  @media (max-width: 640px) {
    width: 80%;
  }
`;

const Input = styled.input`
  flex: 1;
  box-sizing: border-box;
  margin-left: 16px;
  line-height: 23px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.varibles.inputColor};
  border: none;
  outline: none;
  background: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.varibles.placeHolderColor};
  }
`;

const SearchDropDown = styled.div`
  position: absolute;
  top: 59px;
  left: -1px;
  right: -1px;
  background: ${({ theme }) => theme.varibles.dropdownBackground};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 4px 4px;
  border: 1px solid ${({ theme }) => theme.varibles.borderColor};
  display: ${({ isShown }) => (isShown ? "block" : "none")};
`;

const ListItem = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  font-size: 18px;
  line-height: 21px;
  padding: 16px;
  color: ${({ theme, isActive }) =>
    isActive ? "#FEFEFE" : theme.varibles.inputColor};
  background: ${({ isActive }) => (isActive ? "#3498DB" : "inherit")};
  cursor: pointer;
`;

export { AutoCompleteWrapper, Input, SearchDropDown, ListItem, Item };
