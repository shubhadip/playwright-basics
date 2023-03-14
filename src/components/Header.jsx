import './Header.css';
import logo from '../assets/logo.png';
import Welcome from './Welcome';

function Header() {
  return (
    <header className="main-header">
      <Welcome />
      <img src={logo} alt="A list" />
      <h1>My Cypress Course Tasks</h1>
    </header>
  );
}

export default Header;
