import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Book from '../components/Book';
import './BookPage.css';

const BookPage = () => {
  const { bookId } = useParams();

  const [bookInfo, setBookInfo] = useState({});

  const getBook = async () => {
    await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then(res => setBookInfo(res.data.volumeInfo));
  }

  useEffect(() => {
    getBook();
  }, [])

  return (
    <div>
      <Book imageUrl={bookInfo.imageLinks?.thumbnail} id={bookId} page={'bookpage'} />
      <h1>{bookInfo.title}</h1>
      <h3>{bookInfo.publishedDate?.split('-')[0]}</h3>
      <p>Written by {bookInfo.authors?.map(author => `${author} `)}</p>
      <div dangerouslySetInnerHTML={{__html: `${bookInfo.description}`}} />
      <p>{bookInfo.pageCount} pages</p>
      {bookInfo.categories?.map(category => <p>{category}</p>)}
      <p>{bookInfo.language}</p>
    </div>
  )
}

export default BookPage