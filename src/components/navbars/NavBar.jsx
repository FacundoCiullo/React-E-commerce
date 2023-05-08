
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Theme from "../../js/theme"



function NavBar() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar 
          key={expand} 
          bg="dark" 
          variant="dark" 
          expand={expand} 
          className="mb-3"
          fixed=""
          >
          <Container fluid>
            <Navbar.Brand href="#"><i class="bi bi-boxes"></i> Facundo Shop</Navbar.Brand>

            <div className="d-flex justify-content-end">
              <Theme />{/* Swich modo oscuro */}
            </div>

            <Navbar.Toggle  
              aria-controls={`offcanvasNavbar-expand-${expand}`} 
              className="border-0 " 
            />
            <Navbar.Offcanvas
              className="text-bg-dark offcanvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}` }
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title 
                  id={`offcanvasNavbarLabel-expand-${expand}`} ><i class="bi bi-boxes"></i> Facundo Shop
                </Offcanvas.Title>
                
                <div className="d-flex justify-content-end">
                  <Theme />{/* Swich modo oscuro */}
                </div>

              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-2">
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Buscar"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="secondary"><i class="bi bi-search"></i></Button>
                  </Form>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={(
                      <>
                        <i className="bi bi-person-fill"></i> {""}
                      </>
                    )}
                    variant="secondary"
                    menuVariant="dark"
                    className="d-grid gap-2"
                  >
                    <Dropdown.ItemText><i class="bi bi-person-circle"></i> Facundo Ciullo</Dropdown.ItemText>
                    <Dropdown.Item href="#/action-1"><i class="bi bi-box-seam"></i> Pedidos</Dropdown.Item>
                    <Dropdown.Item href="#/action-1"><i class="bi bi-pencil-square"></i> Editar</Dropdown.Item>
                    <Dropdown.Item href="#/action-1"><i class="bi bi-box-arrow-left"></i> Log Out</Dropdown.Item>
                  </DropdownButton>

                  <Button variant="secondary">
                    <i className="bi bi-cart3"></i> <Badge bg="danger">0</Badge>
                    <span className="visually-hidden">unread messages</span>
                  </Button>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;


