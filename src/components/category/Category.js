import React from 'react'
import CategoryItem from '../categoryItem/CategoryItem.js'

export default function Category({categories}) {
  return (
    
    <div className="container mt-5 mb-5">
      {categories.map((Category)=>{
       return <CategoryItem key={Category._id} category={Category} />
      })}
    </div>
)
}
