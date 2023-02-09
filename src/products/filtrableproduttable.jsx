import React, {useState} from "react";
import SearchBar from "./searchbar";
import ProductTable from "./productTable";


const FilterableProductTable = (props) => {

    const[filterText,setFilterText] = useState('');
    const[inStockOnly,setInStockOnly] = useState(false);

    const  handleFilterText = (e) => {
        setFilterText(e.target.value);
    }

    const handleInStockOnly = (e) => {

        setInStockOnly(e.target.checked)
    }
    return (
        <React.Fragment>
            <SearchBar/>
            <ProductTable
            filterText = {filterText}
            inStockOnly = {inStockOnly}
            onFilterText= {handleFilterText}
            onInStockOnly = {handleInStockOnly}
             Product= {props.Products} />
        </React.Fragment>
    )
}

export default FilterableProductTable;