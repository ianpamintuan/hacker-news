import React, { useState } from "react";
import { useFetch } from "../../api/fetch";
import { Header } from "../../components/Header/Header";
import { StoriesSection } from "../../components/StoriesSection/StoriesSection";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Pagination } from "../../components/Pagination/Pagination";
import { debounce } from "debounce";

export const MainPage = () => {
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const { list, loading, error } = useFetch(
        `https://hn.algolia.com/api/v1/search?tags=story&query=${query}&page=${currentPage}`
    );

    const handleTextChange = (text) => {
        setQuery(text);
        setCurrentPage(0);
    };

    return (
        <div className="container">
            <Header onChange={debounce(handleTextChange, 1000)} />
            {!loading && error && (
                <div className="error text-center">{error}</div>
            )}
            {loading && (
                <Loader
                    type="Oval"
                    color="#49a6e9"
                    height={80}
                    width={80}
                    className="centered"
                />
            )}
            {!loading &&
                (list && list.nbHits > 0 ? (
                    <>
                        <StoriesSection list={list} />
                        <Pagination
                            currentPage={currentPage}
                            totalPages={(!loading && list?.nbPages - 1) || 1}
                            setCurrentPage={setCurrentPage}
                        />
                    </>
                ) : (
                    <div className="text-center"> No results found </div>
                ))}
        </div>
    );
};
