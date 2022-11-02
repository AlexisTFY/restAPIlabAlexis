import React from "react";

interface PageInterface{
    newPage: number;
    setNewPage: (value: number) => void;
}

interface FilterInterface{
    filter: string;
    setFilter: (value: string) => void;
}

export const NewPageContext = React.createContext<PageInterface>({
    newPage: null,
    setNewPage: (value) => { },
});


export const NewPageContextComponent: React.FC = (props) => {
    const [newPage, setNewPage] = React.useState(1);
    return (
        <NewPageContext.Provider value={{ newPage, setNewPage }}>
            {props.children}
        </NewPageContext.Provider>
    )
};


export const FilterContext = React.createContext<FilterInterface>({
    filter: "",
    setFilter: (value) => { },
});


export const FilterContextComponent: React.FC = (props) => {
    const [filter, setFilter] = React.useState("");
    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {props.children}
        </FilterContext.Provider>
    )
};