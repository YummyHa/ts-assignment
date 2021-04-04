import { useEffect, useState, useRef } from "react";
import {
  AutoCompleteWrapper,
  Input,
  SearchDropDown,
  ListItem,
  Item,
} from "./styles";
import { ReactComponent as SearchIcon } from "assets/images/search.svg";

function AutoComplete({ suggestList, onInput, clearSuggestList }) {
  const inputRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeOption, setActiveOption] = useState(0);

  useEffect(() => {
    setShowDropdown(suggestList && suggestList.length !== 0);
    setActiveOption(0);
  }, [suggestList]);

  function onSelectItem(value, index) {
    setActiveOption(index);
    inputRef.current.value = value;
    clearSuggestList();
    setActiveOption(0);
  }

  function onKeyDown(event) {
    if (suggestList && suggestList.length > 0) {
      switch (event.keyCode) {
        // Enter key
        case 13:
          inputRef.current.value = suggestList[activeOption];
          setActiveOption(0);
          clearSuggestList();
          break;
        // Up key
        case 38:
          if (activeOption > 0) {
            setActiveOption(activeOption - 1);
          }
          break;
        // Down key
        case 40:
          if (activeOption < suggestList.length - 1) {
            setActiveOption(activeOption + 1);
          }
          break;
        default:
          break;
      }
    }
  }

  function onChange(event) {
    onInput(event.target.value);
  }

  return (
    <AutoCompleteWrapper showDropdown={showDropdown}>
      <SearchIcon />
      <Input
        ref={inputRef}
        type="text"
        autoComplete="off"
        name="search-field"
        placeholder="Try Vietnam"
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
      <SearchDropDown isShown={showDropdown}>
        <ListItem>
          {suggestList &&
            suggestList.map(function renderItems(value, index) {
              return (
                <Item
                  key={value}
                  onClick={() => onSelectItem(value, index)}
                  isActive={activeOption === index}
                >
                  {value}
                </Item>
              );
            })}
        </ListItem>
      </SearchDropDown>
    </AutoCompleteWrapper>
  );
}

export default AutoComplete;
