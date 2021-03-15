import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const FlexItem = ({ className, children }) => {
    return <div className={classNames("flex-item", className)}>{children}</div>;
};

FlexItem.propTypes = {
    children: PropTypes.node.isRequired,
};
