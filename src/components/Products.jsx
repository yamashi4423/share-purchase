import React from 'react'

function Products({products, setProducts}) {
  return (
    <div>
        {products.map((product) => {
            return (
                <div className="product">{product.name}</div>
            )
        })}
    </div>
  )
}

export default Products