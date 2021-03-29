import { FlexItem } from "../FlexItem/FlexItem";
import { SearchInput } from "../SearchInput/SearchInput";

export const Header = () => {
    return (
        <form className="flex-container header">
            <FlexItem>
                <h1>Search Hacker News</h1>
            </FlexItem>
            <FlexItem className="align-right">
                <div className="search">
                    <SearchInput
                        onChange={(searchText) => {
                            // API call here
                        }}
                    />
                </div>
            </FlexItem>
        </form>
    );
};
