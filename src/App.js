import React from "react"
import Product from "./Product"
import productsData from "./productsData"


const App = () => {
  const productComponents = productsData.map(product => 
                                            <Product key={product.id} 
                                            name={product.name} 
                                            price={product.price} 
                                            description={product.description}
                                        />)
  return (
    <div>
      {productComponents}
    </div>
  )
}

export default App

