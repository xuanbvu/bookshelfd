import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './views/Profile';
import Diary from './views/Diary';
import Books from './views/Books';
import Bookshelf from './views/Bookshelf';
import Readlist from './views/Readlist';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={ <Profile /> } />
          <Route path='/diary' element={ <Diary /> } />
          <Route path='/books' element={ <Books /> } />
          <Route path='/bookshelf' element={ <Bookshelf /> } />
          <Route path='/readlist' element={ <Readlist /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
