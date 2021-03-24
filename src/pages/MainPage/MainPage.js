import React from "react";
import { useFetch } from "../../api/fetch";
import { Header } from "../../components/Header/Header";
import { StoriesSection } from "../../components/StoriesSection/StoriesSection";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Pagination } from "../../components/Pagination/Pagination";

export const MainPage = () => {
    const { list, loading, error } = useFetch(
        "http://hn.algolia.com/api/v1/search?tags=story"
    );
    return (
        <div className="container">
            <Header />
            {loading ? (
                <Loader
                    type="Oval"
                    color="#49a6e9"
                    height={80}
                    width={80}
                    className="centered"
                />
            ) : (
                <>
                <StoriesSection list={list} />
                <Pagination  />
                </>
            )}
        </div>
    );
};
