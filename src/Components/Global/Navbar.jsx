import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     const [activeLink, setActiveLink] = useState("");

    const handleClick = (event) => {
        setActiveLink(event.target.getAttribute("to"));
    }
    return (
        <>
            <h1 className='Company-title'>Westcoast Education</h1>
            <nav>
                <ul className='Navigation'>
                    <li className='Navigation-item'>
                        <Link to='/' aria-label='Home' onClick={handleClick} className={activeLink === '/' ? 'active' : ''}>Home</Link>
                    </li>
                    <li className='Navigation-item'>
                        <Link to='/courses' aria-label='Courses' onClick={handleClick} className={activeLink === '/courses' ? 'active' : ''}>Courses</Link>
                    </li>
                    <li className='Navigation-item'>
                        <Link to='/teachers' aria-label='Teachers' onClick={handleClick} className={activeLink === '/teachers' ? 'active' : ''}>Teachers</Link>
                    </li>
                    <li className='Navigation-item'>
                        <Link to='/admin' aria-label='Admin' onClick={handleClick} className={activeLink === '/admin' ? 'active' : ''}>Admin</Link>
                    </li>
                </ul>
            </nav>
       </>
    );
};

export default Navbar;