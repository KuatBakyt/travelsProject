import React from 'react'
import "../../allcss/categories.css"

function Categories(props) {
  return (
    <div className='categories'>
        {
             props.categoriesPage.categories_Data.map(c => (
                <div key={c.key} onClick={() => props.chooseCategory(c.key)}>{c.name}</div>
             ))
        }
    </div>
  )
}

export default Categories