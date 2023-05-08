import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
        <Navbar 
          bg="dark" 
          variant="dark" 
          className="mb-3 "
        >
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./Carrito.jsx">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </Navbar>
      )}
  ;


export default Header;