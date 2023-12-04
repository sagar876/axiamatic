import React from "react";
import { StyledSearchBox } from "./searchBox.styles";
import Search from "../../assets/search.svg";
export const SearchBox = (props: any) => {
  const { onChange } = props;
  return (
    <StyledSearchBox>
      <span>
        <img alt="search" src={Search} />
      </span>
      <input onChange={onChange} placeholder="Search for any software..." />
    </StyledSearchBox>
  );
};
