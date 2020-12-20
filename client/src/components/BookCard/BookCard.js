import React, { useState } from "react";
import './BookCard.css';
import request from "superagent";

const BookCard = (props) => {
  const [book, setBook] = useState({
    imageUrl: props.image,
    title: props.title,
    author: props.author,
    publishedYear: props.published
  });

  const addBook = (e) => {
    e.preventDefault();
    console.log('adding book');
    request
    .post('/api/book')
    .send(book)
    .set('Accept', 'application/json')
    .then(res => {
       console.log('yay got ' + JSON.stringify(res.body));
    });
 
  }
  return (
    <div className="row">
      <div className="leftcolumn">
    <div className="card bg-dark text-white">
      <img src={props.image} alt="" />
      <div className="card bg-dark text-white">
        <button onClick={addBook}>Add To List</button>
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
