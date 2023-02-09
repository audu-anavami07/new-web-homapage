import React from "react";
import ProductcategoryRow from "./productscategoryRow";
import ProductRow from "./productRow";

const ProductTable = (props) => {
    const rows = [];
    let LastCategory = null;

    props.products.forEach((product) => {
        if(
            product.name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1
        ){
            return;
        }

        if (props.inStockOnly && !product.stocked){
            return;
        }

        if (LastCategory !== product.category) {
            rows.push(
                <ProductcategoryRow
                category={product.category}
                key = {product.category}/>
               
            );
        }

        rows.push(<ProductRow product = {product} key = {product.name}/>)

        LastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        name
                    </th>
                    <th>
                        price
                    </th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )

}

export default ProductTable;