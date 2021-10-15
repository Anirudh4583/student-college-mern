import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Colleges from './views/Colleges'
import Students from './views/Students'
import Home from './views/Home'
import { Navbar, Container, Nav } from 'react-bootstrap'
import SimilarCollege from './views/SimilarCollege'
import logo from './assets/colstud.png'
import Charts from './views/Charts'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container className="mx-1">
            <Navbar.Brand className="m-0 p-0">
              <Link to="/" className="navbar-brand fw-bolder text">
                <img
                  src={logo}
                  width="100"
                  height="50"
                  className="d-inline-block align-top"
                  alt="ColStud"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  as={NavLink}
                  className="nav-link"
                  to="/colleges/all"
                  activeClassName="active"
                >
                  Colleges
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  className="nav-link"
                  to="/students/all"
                  activeClassName="active"
                >
                  Students
                </Nav.Link>

                <Nav.Link
                  as={NavLink}
                  className="nav-link"
                  to="/colleges/charts"
                  activeClassName="active"
                >
                  Charts
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/colleges/all" component={Colleges} />
          <Route
            path="/colleges/similar/:collegeId"
            component={SimilarCollege}
          />

          <Route path="/students/all" component={Students} />

          <Route path="/colleges/charts" component={Charts} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
