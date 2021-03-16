import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const SearchInput = ({ onChange, className }) => {
    const [value, setValue] = useState("");
    return (
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
    );
};

SearchInput.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};
