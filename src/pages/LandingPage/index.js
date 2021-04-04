import { useRef, useState } from "react";
import { debounce } from "utils/debounce";
import AutoComplete from "components/AutoComplete";
import { Banner } from "./styles";
import { countries } from "./mockData";

const DELAY_CALL_TIME = 300;

function LandingPage() {
  const [suggestList, setSuggestList] = useState([]);

  const onInput = useRef(
    debounce((value) => {
      setSuggestList(
        countries.reduce((acc, val) => {
          if (
            acc.length < 5 &&
            ~val.toLowerCase().indexOf(value.toLowerCase())
          ) {
            acc.push(val);
          }
          return acc;
        }, [])
      );
    }, DELAY_CALL_TIME)
  ).current;

  return (
    <>
      <Banner />
      <AutoComplete
        suggestList={suggestList}
        clearSuggestList={() => setSuggestList([])}
        onInput={onInput}
      />
    </>
  );
}

export default LandingPage;
