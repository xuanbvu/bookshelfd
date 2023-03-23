import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Book from '../components/Book';
import './Search.css';

const Search = () => {
  const { searchTerm } = useParams();
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const search = async () => {
    await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then(res => {
        setSearchResults(res.data.items);
        setTotalItems(res.data.totalItems);
      })
  }

  useEffect(() => {
    search();
  }, [searchTerm])

  const clickBook = (id) => {
    navigate(`/book/${id}`);
  }

  return (
    <div className='search-results'>
      <p className='total-search-results'>Found {totalItems} matches for "{searchTerm.split('+').join(' ')}"</p>
      {searchResults.map(volume => {
        const info = volume.volumeInfo;
        return (
          <div className='search-result' key={volume.id}>
            <Book imageUrl={info.imageLinks?.thumbnail} id={volume.id} page={'search'} />
            <div>
              <h1 onClick={() => clickBook(volume.id)}>{info.title}</h1>
              <h3>{info.publishedDate.split('-')[0]}</h3>
            </div>
            <p>Written by {info.authors.map(author => `${author} `)}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Search