import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import genericBook from '../images/genericbook.png';
import './Book.css';

const Book = ({ imageUrl, id, page }) => {
  const navigate = useNavigate();
  const bookCover = document.getElementById(id);

  const [showIcons, setShowIcons] = useState(false);
  // TODO: get states from db for saved data
  const [read, setRead] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (imageUrl == undefined) bookCover?.classList?.add('no-hover')
  }, [bookCover])

  useEffect(() => {
    if (read) bookCover?.classList.add('read-book');
    else bookCover?.classList.remove('read-book');
  }, [read])
  
  const clickBook = () => {
    navigate(`/book/${id}`);
  }

  return (
    <div
      id={id}
      className={`book-cover ${page}-book-cover`}
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}
    >
      <img
        src={imageUrl || genericBook}
        onClick={clickBook}  
      />
      {showIcons && imageUrl !== undefined && (
        <div className='book-icons'>
          <button
            onClick={() => setRead(!read)}
            style={read ? {color: 'var(--logo-green'} : {}}  
          >
            <FontAwesomeIcon icon={faBookBookmark} />
          </button>
          <button
            onClick={() => setLiked(!liked)}
            style={liked ? {color: 'var(--logo-orange'} : {}}  
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
          {/* TODO: implement tooltip when clicked */}
          <button>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Book