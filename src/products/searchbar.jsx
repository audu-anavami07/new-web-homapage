import React from "react";

const SearchBar = () => {
    return (
        <form action="">
            <input type="text" value={props.filterText} onChange =  {(e) => props.onFilterText(e)} placeholder="search....." />
            <br />
            <label >
                <input type="checkbox" value={props.inStockOnly} onChange= {(e) => props.onInStockOnly(e)}/> only products show in stock
            </label>
        </form>
    );
}


export default SearchBar;