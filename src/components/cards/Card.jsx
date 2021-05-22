import React from "react";

const Card = ({letter}) => {
  return (
    <main className="card">
      <h2 className="card__title">{letter}</h2>
    </main>
  )
}

export default Card;
