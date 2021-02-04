import React from 'react'
import SearchRounded from "@material-ui/icons/SearchRounded";
import { Input, Wrapper } from './StyledComponent';

const SearchInput = ({ ...rest }) => {
  return (
    <Wrapper>
      <SearchRounded color="inherit" />
      <Input {...rest} />
    </Wrapper>
  );
};

export default SearchInput;
