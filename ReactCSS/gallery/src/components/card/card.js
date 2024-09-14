import React from 'react'
import style from "./card.module.css"
const Card = () => {
  return (
    <div className={style.card}>
        <h1>Product 1</h1>
        <img src="https://placehold.co/200" alt="prod1"/>
        <p> n the "Signature" section, add your signature text in the box. If you want, you can format your message by adding an image or changing the text style.
        </p>
        </div>
  )
}

export default Card

