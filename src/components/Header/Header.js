import { FlexItem } from "../FlexItem/FlexItem";

export const Header = () => {
    return (
        <form className="flex-container align-center">
            <FlexItem>
                <h1>Search Hacker News</h1>
            </FlexItem>
            <FlexItem>
                <input type="text" class="form-input" value="react" />
            </FlexItem>
        </form>
    );
};
