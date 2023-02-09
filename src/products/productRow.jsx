import React from "react";

const ProductRow = (props) => {
    const name = props.product.stocked? (
        props.product.name
    ):  (
        <span style={{color: "res"}}>{props.product.name}</span>
    );

    return (
        <tr>
            <td>{name}</td>
            <td>{props.product.price}</td>
        </tr>
    );
}

export default ProductRow;