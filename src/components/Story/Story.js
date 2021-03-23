import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Story = ({ className, data }) => {
    const { title, points, author, num_comments, url } = data;
    return (
        <article className={classNames("story", className)}>
            <h4 className="title">{title}</h4>
            <p className="info">{`${points} points by ${author} | ${num_comments} comments`}</p>
            <div className="links">
                <a
                    className="text-link"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                >
                    Read more
                </a>
            </div>
        </article>
    );
};

Story.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
};
