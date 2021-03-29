import React from "react";
import { Story } from "../Story/Story";

export const StoriesSection = ({ list }) => {
    return (
        <section className="stories flex-container space-around row-wrap">
            {list?.hits?.map((story, index) => (
                <Story data={story} key={index} />
            ))}
        </section>
    );
};
