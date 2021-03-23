import React from "react";
import { Story } from "../Story/Story";

export const StoriesSection = ({ list }) => {
    return (
        <section className="stories flex-container">
            {list?.hits?.map((story) => (
                <Story data={story} />
            ))}
        </section>
    );
};
