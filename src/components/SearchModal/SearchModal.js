import React, { useState } from 'react';

import './SearchModal.scss';
import Close from '../UI/Close/Close';

const SearchModal = props => {
    const [searchText, setSearchText] = useState('');

    const handleInput = e => {
        const text = e.target.value;
        setSearchText(text);
    };

    const handleSearchClick = () => {
        console.log(searchText);
    };

    return (
        <div className="search-modal">
            <div className="container">
                <div className="search-modal__inner">
                    <div className="search-modal__close">
                        <Close clicked={props.closeSearchModal} customStyles={{ width: '3rem', height: '3rem' }} />
                    </div>
                    <div className="search-modal__input--wrapper">
                        <label>
                            <input
                                type="text"
                                placeholder="Search something..."
                                value={searchText}
                                onChange={handleInput}
                            />
                            <button onClick={handleSearchClick}>Search</button>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
