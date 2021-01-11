import React, { useState } from 'react'
import cn from 'classnames'

type CategoriesType = {
    items: string[]
}

const Categories: React.FC<CategoriesType> = ({ items }) => {
    const [activeCategory, setActiveCategory] = useState<number | null>(null)

    return (
        <div className="categories">
            <ul>
                <li className={cn({'active': activeCategory === null})} onClick={() => setActiveCategory(null)}>Все</li>
                {items.map((name, index) => {
                    return (
                        <li 
                            className={cn({'active': activeCategory === index})}
                            onClick={() => setActiveCategory(index)} 
                            key={`${name}_${index}`}
                        >{name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Categories