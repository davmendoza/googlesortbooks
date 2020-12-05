import React from "react";
import './BookCard.css';

const BookCard = (props) => {
  return (
    <div className="row">
      <div className="leftcolumn">
    <div className="card bg-dark text-white">
      <img src={props.image} alt="" />
      <div className="card bg-dark text-white">
        <h2>{props.title}</h2>
        <br/>
        <h3>Author: {props.author}</h3>
        <br/>
        <p>Published Date: {props.published === '0000' ? 'Not available': props.published.substring(0,4)}</p>
        <br/>
        <p>Description: {props.description}</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default BookCard;
