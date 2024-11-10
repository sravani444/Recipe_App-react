import React from 'react'
import style from './recipe.module.css';

export const Recipes = ({title,calories,image,ingredients}) => {
  return (
    <div  className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
     <ol >
      <h2>Ingredients:</h2>
          {ingredients.map(ingredients => (
              <li className={style.ingrediants}>
                   {ingredients.text}
              </li>
          ))}
     </ol>
      <p className={style.calories}>Calories: {calories}</p>   
      <img className={style.image} src={image} alt=""/>
    </div>
  )
}
