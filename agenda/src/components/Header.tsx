
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-purple-500 p-4 shadow-md">
      <nav>
        <ul className="flex justify-around text-white">
          <li><Link to="/" className="">Inicio</Link></li>
          <li><Link to="/cart" className="">Historial</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;