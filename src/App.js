import './App.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <h1 className="main-title">Bookstore</h1>
          <div className="nav-links">
            <Link to="/">Books</Link>
            <Link to="/categories">Categories</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
