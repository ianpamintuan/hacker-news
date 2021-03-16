import { FlexItem } from "../FlexItem/FlexItem";
import { SearchInput } from "../SearchInput/SearchInput";

export const Header = () => {
    return (
        <form className="flex-container align-center">
            <FlexItem>
                <h1>Search Hacker News</h1>
            </FlexItem>
            <FlexItem className="align-right">
                <SearchInput
                    onChange={(searchText) => {
                        // API call here
                    }}
                />
            </FlexItem>
        </form>
    );
};
