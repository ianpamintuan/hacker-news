import { FlexItem } from "../FlexItem/FlexItem";
import { SearchInput } from "../SearchInput/SearchInput";
import PropTypes from "prop-types";

export const Header = ({ onChange }) => {
    return (
        <form className="flex-container header">
            <FlexItem>
                <h1>Search Hacker News</h1>
            </FlexItem>
            <FlexItem className="align-right">
                <div className="search">
                    <SearchInput
                        onChange={onChange}
                    />
                </div>
            </FlexItem>
        </form>
    );
};

Header.propType = {
    onChange: PropTypes.func.isRequired,
};
