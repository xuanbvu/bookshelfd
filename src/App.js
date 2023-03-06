import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './views/Profile';
import Diary from './views/Diary';
import BooksList from './views/BooksList';
import Bookshelf from './views/Bookshelf';
import Readlist from './views/Readlist';
import Book from './views/Book';
import Reading from './views/Reading';
import Search from './views/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={ <Profile /> } />
          <Route path='/diary' element={ <Diary /> } />
          <Route path='/books' element={ <BooksList /> } />
          <Route path='/bookshelf' element={ <Bookshelf /> } />
          <Route path='/readlist' element={ <Readlist /> } />
          <Route path='/reading' element={ <Reading /> } />

          <Route path='/book/:bookTitle' element={ <Book /> } />
          <Route path='/search/:searchTerm' element={ <Search /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
