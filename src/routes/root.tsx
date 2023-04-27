import { Outlet, Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';

export default function Root() {
  return (
    <>
      <header>
          <ul className='nav-list'>
            <li className='nav-link'>
              <img alt="AJ Fuhrmann" src={avatar} id="avatar" />
            </li>
            <li className='nav-link'>
              <Link to={'/'}>AJ Fuhrmann</Link>
            </li>
            <li className='nav-link'>
              <Link to={`about`}>About Me</Link>
            </li>
            <li className='nav-link'>
              <p>Work</p>
            </li>
            <li className='nav-link'>
              <p>Example Projects</p>
            </li>
            <li className='nav-link'>
              <p>Contact</p>
            </li>
            <li className='nav-link'>
              <a href="https://github.com/Fuhrmaaj/fuhrmaaj.github.io" rel="author">The source code for this portfolio can be found on Github!</a>
            </li>
          </ul>
      </header>

      <div id='content'>
        <Outlet />
      </div>
    </>
  );
};
