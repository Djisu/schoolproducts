import React from "react"

const Product = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <h3>{props.price}</h3>
            <h3>{props.description}</h3>
        </div>
    )
}

export default Product