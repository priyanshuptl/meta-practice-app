import Nav from '../Nav';
import logo from 'assets/Logo.svg';

import './styles.css';

const Header = () => {
  return (
    <header className='header grid'>
      <img src={logo} alt='Logo' id='logo' />
      <Nav />
    </header>
  );
};

export default Header;
