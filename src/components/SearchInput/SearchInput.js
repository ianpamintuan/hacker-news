import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"

export const SearchInput = ({ onChange, className }) => {
    const [value, setValue] = useState("");
    return (
        <>
         
            <input
                type="text"
                className={classNames("form-input", className)}
                onChange={(e) => {
                    const textValue = e.target.value;
                    setValue(textValue);
                    onChange(textValue);
                }}
                value={value}
                autoComplete="false"
            />
           <FontAwesomeIcon icon={faSearch} />
        </>
    );
};

SearchInput.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};
