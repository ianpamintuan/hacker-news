import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Story = ({ className, children }) => {
    return (
        <article className={classNames("story", className)}>{children}</article>
    );
};

Story.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
