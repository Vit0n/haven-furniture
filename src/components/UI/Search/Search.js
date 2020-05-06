import React from 'react';

import { ReactComponent as SearchIcon } from '../../../images/icons/search.svg';

import './Search.scss';

const Search = props => {
    return <SearchIcon className="search-icon" onClick={props.clicked} />;
};

export default Search;
