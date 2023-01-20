import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Global/Navbar';
import Landingpage from './Components/Landingpage';
import CourseList from './Components/Courses';
import Teachers from './Components/Teachers';
import Admin from './Components/Admin';

function App() {
  return (
  <div className='App-wrapper'>
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route
            path='/'
            element={<Landingpage />}
          />
          <Route
            path='/courses'
            element={<CourseList />}
          />
          <Route
            path='/teachers'
            element={<Teachers />}
          />
          <Route
            path='/admin'
            element={<Admin />}
          />
        </Routes>
      </main>
    </Router>
  </div>
  );
}

export default App;
