import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import todo from './images/icon-todo.svg'
import calendar from './images/icon-calendar.svg'
import reminders from './images/icon-reminders.svg'
import planning from './images/icon-planning.svg'





import logo from './images/logo.svg'
import Image from 'react-bootstrap/Image';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

function CollapsibleExample() {
  return (
    <>
    {[ 'md'].map((expand) => (
      <Navbar key={expand} expand={expand} className="  py-3 grey">
        <Container fluid>
          <Navbar.Brand  href="#"><Image fluid src={logo} /></Navbar.Brand>
        
          <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas 
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header  closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
            <Nav className="justify-content-end grey">
              <div className="ddd">
            <NavDropdown  
                    title="Features"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                  
                        <NavDropdown.Item  href="#action3">  <Image src={todo} className='pe-2 large' /> Todo List</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                     <Image className='pe-2 large' src={calendar} /> Calendar
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    <Image className='pe-2 large' src={reminders} />  Reminders
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    <Image className='pe-2 large' src={planning} />  Planning
                    </NavDropdown.Item>
                  
                
                  
                  </NavDropdown>
                  </div>
                  
                  <NavDropdown 
                    title="Company" className='large'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item className='large' href="#action3">History</NavDropdown.Item>
                    <NavDropdown.Item className='large' href="#action4">
                      Our Team
                    </NavDropdown.Item>
                    <NavDropdown.Item className='large' href="#action4">
                      Blog
                    </NavDropdown.Item>
                  
                  </NavDropdown>
                  <Nav.Link className='large' href="#action1">Careers</Nav.Link>
                  <Nav.Link className='large' href="#action2">About</Nav.Link>
              </Nav>

              <Nav className=" justify-content-md-end   flex-grow-1  ">
                <Nav.Link className='large text-center' href="#action1">Login</Nav.Link>
                <button className='grey do py-2 px-md-4  large'>Register</button>
              </Nav>
          
                
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  );
}

export default CollapsibleExample;