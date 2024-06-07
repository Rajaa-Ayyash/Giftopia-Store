import React from 'react'
import ProductDetails from "../../components/productDetailsPage/ProductDetails"
export default function ProductDetailsPage({productID}) {
  return (
    <>
        <ProductDetails productID={productID}/>
    </>
  )
}